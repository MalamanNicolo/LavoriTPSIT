let timer = 0;
        let interval;

        // Start the timer on page load
        window.onload = function () {
            interval = setInterval(() => {
                timer++;
                document.getElementById('timer').innerText = timer;
            }, 1000);

            // Attach event listeners to buttons
            document.getElementById('test1-button').addEventListener('click', () => navigateToPage('Test1'));
            document.getElementById('test2-button').addEventListener('click', () => navigateToPage('Test2'));
            document.getElementById('test3-button').addEventListener('click', () => navigateToPage('Test3'));
            document.getElementById('testoA-button').addEventListener('click', () => navigateToQuiz('testoA.html'));
            document.getElementById('testoB-button').addEventListener('click', () => navigateToQuiz('testoB.html'));
            document.getElementById('end-test-button').addEventListener('click', endTest);
        };

        // Navigate to another HTML page
        function navigateToPage(testName) {
            window.open(`Tests.html?test=${testName}`, '_blank');  // Passa il parametro 'test'
        }
        function navigateToQuiz(testoNome)
        {
            window.open(`${testoNome}`,'_blank');
        }

        // End the test and show the form
        function endTest() {
            clearInterval(interval);
            document.getElementById('final-time').innerText = timer;
            document.querySelector('.button-container').style.display = 'none';
            document.getElementById('form-container').style.display = 'block';
            localStorage.clear();
        }