var btn = document.querySelector('button');
var box = document.querySelector('#box');
function changecolor() {
    var c1=Math.floor(Math.random() * 256);
    var c2=Math.floor(Math.random() * 256);
    var c3=Math.floor(Math.random() * 256);
    box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
    console.log(`rgb(${c1}, ${c2}, ${c3})`);
}

btn.addEventListener('click', changecolor);