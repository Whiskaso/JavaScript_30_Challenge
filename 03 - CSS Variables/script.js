const inputSpacing = document.querySelector('#spacing');
const inputBlur = document.querySelector('#blur');
const inputBase = document.querySelector('#base');
const img = document.querySelector('img');
const span = document.querySelector('.hl');


function blur() {
    let blur = inputBlur.value;
    document.documentElement.style.setProperty('--blur', `${blur}px`);
}

function changeColor() {
    let color = inputBase.value;
    document.documentElement.style.setProperty('--base', color);
}

function spacing() {
    let spacing = inputSpacing.value;
    document.documentElement.style.setProperty('--spacing', `${spacing}px`);
}

inputSpacing.oninput = spacing;
inputBlur.oninput = blur;
inputBase.oninput = changeColor;