let interval; // Variabile per memorizzare l'ID dell'intervallo del timer
let seconds = 0;

function startTimer() {
    const timerElement = document.getElementById('timer');
    interval = setInterval(() => {
        seconds++;
        timerElement.textContent = `Timer: ${seconds} sec`;
    }, 1000);
}

function stopTimer() {
    clearInterval(interval); // Ferma il timer
    const message = document.createElement('h2'); // Crea un messaggio di fine
    message.textContent = `Test finito! Tempo totale: ${seconds} secondi.`;
    message.style.color = '#FF5733';
    message.style.textAlign = 'center';
    document.body.appendChild(message); // Aggiunge il messaggio alla pagina
}
document.addEventListener('DOMContentLoaded', () => {
    // Seleziona tutti i bottoni
    const buttons = document.querySelectorAll('.action-btn');

    // Carica i dati dal file JSON
    fetch('contenuti.json')
        .then(response => {
            if (!response.ok) throw new Error('Errore nel caricamento del JSON');
            return response.json();
        })
        .then(data => {
            // Aggiunge l'evento click ai bottoni
            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    const id = button.getAttribute('data-id');
                    const filePath = data[id];

                    if (filePath) {
                        // Reindirizza al file specificato
                        window.location.href = filePath;
                    } else {
                        alert('Collegamento non trovato.');
                    }
                });
            });
        })
        .catch(error => {
            console.error('Errore:', error);
            alert('Errore nel caricamento dei dati.');
        });
});

// Avvia il timer al caricamento della pagina
window.onload = startTimer;
    const fineButton = document.querySelector('.buttons-container button:last-child');
    fineButton.addEventListener('click', stopTimer)
    const buttons = document.querySelectorAll('.buttons-container button[data-id]');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonId = button.getAttribute('data-id');
            updateContent(buttonId);
        });
    });