window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');

    audio.play().catch((error) => {
        const resumeAudio = () => {
            audio.play();
            window.removeEventListener('click', resumeAudio);
        };
        window.addEventListener('click', resumeAudio);
    });
});