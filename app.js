let current = 0;
const answers = Array(QUESTIONS.length).fill(null);
let attemptId = null;
let respondentName = '';

const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const startForm = document.getElementById('startForm');
const respondentNameInput = document.getElementById('respondentName');
const startBtn = document.getElementById('startBtn');
const startError = document.getElementById('startError');
const rankingBody = document.getElementById('rankingBody');
const refreshRankingBtn = document.getElementById('refreshRankingBtn');
const activeRespondent = document.getElementById('activeRespondent');
const scoreEl = document.getElementById('score');
const answeredEl = document.getElementById('answered');
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

function letter(i){ return String.fromCharCode(65+i); }

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
    rankingBody.innerHTML = '<tr><td colspan="6">Nenhuma tentativa registrada ainda.</td></tr>';
    return;
  }

  rankingBody.innerHTML = rows.map(row => `
    <tr>
      <td>${row.position}</td>
      <td>${escapeHtml(row.respondent_name)}</td>
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
    rankingBody.innerHTML = `<tr><td colspan="6">${error.message}</td></tr>`;
  }
}

async function saveAnswer(questionIndex, selected){
  if(!attemptId) return;
  const q = QUESTIONS[questionIndex];

  try{
    const data = await api('answer', {
      method: 'POST',
      body: JSON.stringify({
        attempt_id: attemptId,
        question_id: q.id,
        selected_answer: selected,
        correct_answer: q.answer
      })
    });
    if(data.ranking) renderRanking(data.ranking);
  }catch(error){
    setStartError(`Não foi possível gravar a resposta: ${error.message}`);
  }
}

function renderGrid(){
  questionGrid.innerHTML = '';
  QUESTIONS.forEach((q, i) => {
    const btn = document.createElement('button');
    btn.className = 'qbtn';
    btn.textContent = i + 1;
    if(i === current) btn.classList.add('current');
    if(answers[i] !== null){
      btn.classList.add('done');
      btn.classList.add(answers[i] === q.answer ? 'correct' : 'wrong');
    }
    btn.onclick = () => { current = i; render(); };
    questionGrid.appendChild(btn);
  });
}

function updateScore(){
  const answered = answers.filter(a => a !== null).length;
  const score = answers.reduce((acc, a, i) => acc + (a === QUESTIONS[i].answer ? 1 : 0), 0);
  scoreEl.textContent = score;
  answeredEl.textContent = answered;
}

function renderFeedback(q, selected){
  if(selected === null){
    feedbackEl.className = 'feedback hidden';
    feedbackEl.innerHTML = '';
    return;
  }

  const ok = selected === q.answer;
  feedbackEl.className = 'feedback ' + (ok ? 'ok' : 'bad');
  const title = ok ? '✅ Você acertou.' : `❌ Você errou. Resposta correta: ${letter(q.answer)}.`;
  const items = q.options.map((opt, i) => {
    const mark = i === q.answer ? '✅' : '❌';
    const chosen = i === selected ? ' <strong>(sua resposta)</strong>' : '';
    return `<li><strong>${mark} ${letter(i)})</strong>${chosen} ${q.explanations[i]}</li>`;
  }).join('');
  feedbackEl.innerHTML = `<h3>${title}</h3><p>Comentário item a item:</p><ul>${items}</ul>`;
}

function render(){
  const q = QUESTIONS[current];
  themeName.textContent = q.theme;
  questionCounter.textContent = `Questão ${current + 1} de ${QUESTIONS.length}`;
  progressFill.style.width = `${((current + 1) / QUESTIONS.length) * 100}%`;
  questionTitle.textContent = `Questão ${q.id}`;
  questionText.textContent = q.stem;

  optionsEl.innerHTML = '';
  q.options.forEach((opt, i) => {
    const label = document.createElement('label');
    label.className = 'option';
    if(answers[current] !== null){
      if(i === q.answer) label.classList.add('correct');
      if(i === answers[current] && i !== q.answer) label.classList.add('wrong');
    }
    label.innerHTML = `
      <input type="radio" name="answer" ${answers[current] === i ? 'checked' : ''}>
      <span class="letter">${letter(i)})</span>
      <span>${opt}</span>
    `;
    label.onclick = () => {
      answers[current] = i;
      saveAnswer(current, i);
      updateScore();
      render();
    };
    optionsEl.appendChild(label);
  });

  renderFeedback(q, answers[current]);
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
    const data = await api('start', {
      method: 'POST',
      body: JSON.stringify({ name })
    });

    attemptId = data.attempt_id;
    respondentName = data.respondent_name;
    activeRespondent.textContent = `Respondente: ${respondentName}`;
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    render();
  }catch(error){
    setStartError(error.message);
  }finally{
    startBtn.disabled = false;
  }
};

loadRanking();
