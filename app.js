let current = 0;
const answers = Array(QUESTIONS.length).fill(null);

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
      if(answers[current] === null){
        answers[current] = i;
      } else {
        answers[current] = i;
      }
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

render();
