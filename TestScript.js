let timer = 0;
let interval;

// Recupera il parametro 'test' dalla query string
const params = new URLSearchParams(window.location.search);
const testName = params.get('test');

// Dati dei test con le domande
const testData = {
    Test1: {
        title: 'Test 1',
        question: 'Questa è la domanda del Test 1.',
    },
    Test2: {
        title: 'Test 2',
        question: 'Questa è la domanda del Test 2.',
    },
    Test3: {
        title: 'Test 3',
        question: 'Questa è la domanda del Test 3.',
    },
};

// Funzione per aggiornare il contenuto dinamico in base al test
if (testData[testName]) {
    document.getElementById('test-title').textContent = testData[testName].title;
    document.getElementById('test-question').textContent = testData[testName].question;
} else {
    document.getElementById('test-title').textContent = 'Test non trovato';
    document.getElementById('test-question').textContent = 'Non ci sono domande per questo test.';
}

// Salva la risposta inserita nel textarea
document.getElementById('test-answer').addEventListener('input', function() {
    const answer = document.getElementById('test-answer').value;
    localStorage.setItem(testName, answer); // Salva la risposta nel localStorage
});

// Carica la risposta salvata, se esiste
window.onload = function() {
    const savedAnswer = localStorage.getItem(testName);
    if (savedAnswer) {
        document.getElementById('test-answer').value = savedAnswer;
    }

    // Avvia il timer
    startTimer();
};

// Funzione per avviare il timer
function startTimer() {
    interval = setInterval(() => {
        timer++;
        document.getElementById('timer').innerText = timer;
    }, 1000);
}
