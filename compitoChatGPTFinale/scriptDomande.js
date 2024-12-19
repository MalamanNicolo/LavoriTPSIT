// Seleziona gli elementi della pagina
const questionElement = document.getElementById('question');
const answerInput = document.getElementById('text-answer');
const feedback = document.getElementById('feedback');

// Identifica la domanda corrente come chiave unica
const questionKey = questionElement.textContent.trim();

// Carica una risposta precedente (se esiste) dal localStorage
const savedAnswer = localStorage.getItem(questionKey);
if (savedAnswer) {
  answerInput.value = savedAnswer;
  feedback.textContent = 'Risposta caricata dal localStorage.';
  feedback.style.color = 'blue';
}

// Salva automaticamente la risposta quando l'utente scrive
answerInput.addEventListener('input', () => {
  const userAnswer = answerInput.value.trim();
  localStorage.setItem(questionKey, userAnswer);

  feedback.textContent = 'Risposta salvata nel localStorage.';
  feedback.style.color = 'green';
});