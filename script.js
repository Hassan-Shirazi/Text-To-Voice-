  const textInput = document.getElementById('text-input');
        const speakButton = document.getElementById('speak-button');

        speakButton.addEventListener('click', () => {
            const textToSpeak = textInput.value;

            if (textToSpeak.trim() === '') {
                alert('Please write something in the text box first.');
                return;
            }

            const utterance = new SpeechSynthesisUtterance(textToSpeak);
            utterance.lang = 'en-US';
            utterance.pitch = 1;
            utterance.rate = 1;

            speakButton.classList.add('speaking');
            
            utterance.onend = () => {
                speakButton.classList.remove('speaking');
            };
            
            utterance.onerror = (event) => {
                console.error('SpeechSynthesisUtterance.onerror');
                alert('An error occurred during speech synthesis.');
                speakButton.classList.remove('speaking');
            };

            window.speechSynthesis.speak(utterance);
        });