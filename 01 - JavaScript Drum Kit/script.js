const keys = document.querySelectorAll('.key');

function playSound(e) {
    const audio = document.querySelector([`audio[data-key="${e.keyCode}"]`]);
    const key = document.querySelector([`.key[data-key="${e.keyCode}"]`]);

    if (!audio) return; // stop the function from running when there is no audio assined to key code 
    audio.currentTime = 0; // rewind to the start 
    audio.play();

    key.classList.add('playing');
}


function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // SKIP IT IF ITS NOT TRANSFORM

    this.classList.remove('playing');
}


window.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));