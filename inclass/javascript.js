
allcbut = document.querySelectorAll('.color-btn');
rand = document.querySelector('#random');
reset = document.querySelector('#reset');
code = document.querySelector('span');
body = document.body;

function changeBackground(color) {
    document.body.style.backgroundColor = color;
    code.textContent = color;
}

while(true) {
    allcbut.forEach(addEventListener('click'))
}