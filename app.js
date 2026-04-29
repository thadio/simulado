let QUESTIONS = [];
let current = 0;
let answers = [];
let attemptId = null;
let respondentName = '';
let startedAt = null;
let timerId = null;

const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const startForm = document.getElementById('startForm');
const respondentNameInput = document.getElementById('respondentName');
const examTypeInputs = Array.from(document.querySelectorAll('input[name="examType"]'));
const startBtn = document.getElementById('startBtn');
const startError = document.getElementById('startError');
const rankingBody = document.getElementById('rankingBody');
const refreshRankingBtn = document.getElementById('refreshRankingBtn');
const activeRespondent = document.getElementById('activeRespondent');
const scoreEl = document.getElementById('score');
const answeredEl = document.getElementById('answered');
const percentEl = document.getElementById('percentScore');
const timerEl = document.getElementById('timer');
const themeName = document.getElementById('themeName');
const questionCounter = document.getElementById('questionCounter');
const progressFill = document.getElementById('progressFill');
const questionTitle = document.getElementById('questionTitle');
const questionText = document.getElementById('questionText');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const questionGrid = document.getElementById('questionGrid');

function letter(i){ return String.fromCharCode(65 + i); }

function formatDate(value){
  if(!value) return '-';
  const date = new Date(value.replace(' ', 'T'));
  if(Number.isNaN(date.getTime())) return value;
  return date.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function formatElapsed(ms){
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  })[char]);
}

function setStartError(message){
  startError.textContent = message || '';
  startError.classList.toggle('hidden', !message);
}

async function api(action, options = {}){
  const response = await fetch(`api.php?action=${action}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  const data = await response.json();
  if(!response.ok || !data.ok){
    throw new Error(data.message || 'Erro ao acessar o servidor.');
  }
  return data;
}

function renderRanking(rows){
  if(!rows.length){
    rankingBody.innerHTML = '<tr><td colspan="7">Nenhuma tentativa registrada ainda.</td></tr>';
    return;
  }

  rankingBody.innerHTML = rows.map(row => `
    <tr>
      <td>${row.position}</td>
      <td>${escapeHtml(row.respondent_name)}</td>
      <td>${escapeHtml(row.exam_label || 'Bloco geral')}</td>
      <td>${row.answered_count}</td>
      <td>${row.correct_count}</td>
      <td>${Number(row.percent_correct).toFixed(2)}%</td>
      <td>${formatDate(row.updated_at || row.started_at)}</td>
    </tr>
  `).join('');
}

async function loadRanking(){
  try{
    const data = await api('ranking');
    renderRanking(data.ranking || []);
  }catch(error){
    rankingBody.innerHTML = `<tr><td colspan="7">${escapeHtml(error.message)}</td></tr>`;
  }
}

function normalizeQuestions(rows){
  QUESTIONS = rows.map((question, index) => ({
    ...question,
    number: index + 1,
    options: (question.options || []).map((option, displayIndex) => ({
      ...option,
      displayIndex
    }))
  }));
  answers = QUESTIONS.map(() => ({
    selected: null,
    saving: false,
    saved: false,
    isCorrect: false,
    correctAnswer: null,
    feedback: [],
    error: ''
  }));
}

function displayLetterForOption(question, optionIndex){
  const option = question.options.find((item) => item.index === optionIndex);
  return letter(option ? option.displayIndex : optionIndex);
}

function startTimer(){
  startedAt = Date.now();
  clearInterval(timerId);
  timerId = setInterval(() => {
    timerEl.textContent = formatElapsed(Date.now() - startedAt);
  }, 1000);
  timerEl.textContent = '00:00';
}

async function saveAnswer(questionIndex, selected){
  if(!attemptId) return;
  const q = QUESTIONS[questionIndex];
  const state = answers[questionIndex];
  if(state.saved) return;
  state.selected = selected;
  state.saving = true;
  state.saved = false;
  state.error = '';
  render();

  try{
    const data = await api('answer', {
      method: 'POST',
      body: JSON.stringify({
        attempt_id: attemptId,
        question_id: q.id,
        selected_answer: selected
      })
    });

    state.saving = false;
    state.saved = true;
    state.isCorrect = Boolean(data.answer.is_correct);
    state.correctAnswer = data.answer.correct_answer;
    state.feedback = data.answer.feedback || [];
    if(data.score) updateScore(data.score);
    if(data.ranking) renderRanking(data.ranking);
  }catch(error){
    state.saving = false;
    state.saved = false;
    state.error = `Não foi possível gravar a resposta: ${error.message}`;
    setStartError(`Não foi possível gravar a resposta: ${error.message}`);
  }

  render();
}

function renderGrid(){
  questionGrid.innerHTML = '';
  QUESTIONS.forEach((q, i) => {
    const state = answers[i];
    const btn = document.createElement('button');
    btn.className = 'qbtn';
    btn.textContent = i + 1;
    if(i === current) btn.classList.add('current');
    if(state.selected !== null){
      btn.classList.add('done');
      if(state.saved) btn.classList.add(state.isCorrect ? 'correct' : 'wrong');
    }
    btn.onclick = () => { current = i; render(); };
    questionGrid.appendChild(btn);
  });
}

function updateScore(serverScore = null){
  const answered = serverScore ? serverScore.answered_count : answers.filter(a => a.saved).length;
  const score = serverScore ? serverScore.correct_count : answers.filter(a => a.saved && a.isCorrect).length;
  const percent = answered === 0 ? 0 : (score / answered) * 100;
  scoreEl.textContent = score;
  answeredEl.textContent = answered;
  percentEl.textContent = `${percent.toFixed(1)}%`;
}

function renderFeedback(state){
  if(state.saving){
    feedbackEl.className = 'feedback saving';
    feedbackEl.innerHTML = '<h3>Gravando resposta...</h3>';
    return;
  }

  if(!state.saved){
    if(state.error){
      feedbackEl.className = 'feedback bad';
      feedbackEl.innerHTML = `<h3>${escapeHtml(state.error)}</h3>`;
      return;
    }

    if(state.selected !== null){
      const q = QUESTIONS[current];
      const selectedOption = q.options.find((opt) => opt.index === state.selected);
      feedbackEl.className = 'feedback confirm';
      feedbackEl.innerHTML = `
        <h3>Confirmar resposta ${displayLetterForOption(q, state.selected)})?</h3>
        <p>${escapeHtml(selectedOption ? selectedOption.text : '')}</p>
        <div class="confirm-actions">
          <button type="button" id="confirmAnswerBtn">Confirmar</button>
          <button type="button" id="changeAnswerBtn" class="secondary">Mudar resposta</button>
        </div>
      `;
      document.getElementById('confirmAnswerBtn').onclick = () => saveAnswer(current, state.selected);
      document.getElementById('changeAnswerBtn').onclick = () => {
        state.selected = null;
        render();
      };
      return;
    }

    feedbackEl.className = 'feedback hidden';
    feedbackEl.innerHTML = '';
    return;
  }

  feedbackEl.className = 'feedback ' + (state.isCorrect ? 'ok' : 'bad');
  const q = QUESTIONS[current];
  const title = state.isCorrect
    ? 'Voce acertou.'
    : `Voce errou. Resposta correta: ${displayLetterForOption(q, state.correctAnswer)}.`;
  const feedbackByIndex = new Map(state.feedback.map((item) => [item.index, item]));
  const items = q.options.map((option) => feedbackByIndex.get(option.index)).filter(Boolean).map((item) => {
    const mark = item.is_correct ? 'Correta' : 'Incorreta';
    const chosen = item.selected ? ' <strong>(sua resposta)</strong>' : '';
    return `<li><strong>${mark} ${displayLetterForOption(q, item.index)})</strong>${chosen} ${escapeHtml(item.explanation)}</li>`;
  }).join('');
  feedbackEl.innerHTML = `<h3>${title}</h3><p>Justificativa item a item:</p><ul>${items}</ul>`;
}

function render(){
  if(QUESTIONS.length === 0){
    questionTitle.textContent = 'Nenhuma pergunta encontrada';
    questionText.textContent = 'Cadastre ou migre as perguntas para o banco de dados.';
    return;
  }

  const q = QUESTIONS[current];
  const state = answers[current];
  themeName.textContent = q.theme;
  questionCounter.textContent = `Questao ${current + 1} de ${QUESTIONS.length}`;
  progressFill.style.width = `${((current + 1) / QUESTIONS.length) * 100}%`;
  questionTitle.textContent = `Questao ${current + 1}`;
  questionText.textContent = q.stem;

  optionsEl.innerHTML = '';
  q.options.forEach((opt) => {
    const optionIndex = opt.index;
    const label = document.createElement('label');
    label.className = 'option';
    if(state.saved){
      if(optionIndex === state.correctAnswer) label.classList.add('correct');
      if(optionIndex === state.selected && optionIndex !== state.correctAnswer) label.classList.add('wrong');
    }
    label.innerHTML = `
      <input type="radio" name="answer" ${state.selected === optionIndex ? 'checked' : ''} ${state.saving || state.saved ? 'disabled' : ''}>
      <span class="letter">${letter(opt.displayIndex)})</span>
      <span>${escapeHtml(opt.text)}</span>
    `;
    label.onclick = () => {
      if(state.saving || state.saved) return;
      state.selected = optionIndex;
      state.error = '';
      render();
    };
    optionsEl.appendChild(label);
  });

  renderFeedback(state);
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === QUESTIONS.length - 1;
  renderGrid();
  updateScore();
}

prevBtn.onclick = () => { if(current > 0){ current--; render(); } };
nextBtn.onclick = () => { if(current < QUESTIONS.length - 1){ current++; render(); } };
refreshRankingBtn.onclick = loadRanking;

startForm.onsubmit = async (event) => {
  event.preventDefault();
  setStartError('');

  const name = respondentNameInput.value.trim();
  if(!name){
    setStartError('Informe o nome do respondente.');
    respondentNameInput.focus();
    return;
  }

  startBtn.disabled = true;
  try{
    const selectedExamType = examTypeInputs.find(input => input.checked)?.value || 'concepts';
    const data = await api('start', {
      method: 'POST',
      body: JSON.stringify({ name, exam_type: selectedExamType })
    });

    normalizeQuestions(data.questions || []);
    attemptId = data.attempt_id;
    respondentName = data.respondent_name;
    activeRespondent.textContent = `Respondente: ${respondentName} | ${data.exam_label || 'Bloco geral'}`;
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    current = 0;
    startTimer();
    render();
  }catch(error){
    setStartError(error.message);
  }finally{
    startBtn.disabled = false;
  }
};

loadRanking();
