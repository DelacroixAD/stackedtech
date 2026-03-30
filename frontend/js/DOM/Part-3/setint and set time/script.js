var btn = document.querySelector("button");
var percent=document.querySelector("#percent");
var grow=0
btn.addEventListener("click", function downloadFile() {
    var int= setInterval(function() {
    grow++
    console.log(grow);
    percent.innerText = grow + "%";
    growth.style.width = grow + "%";
    btn.innerHTML = "Downloading... " ; 
  }, 100);
  setTimeout(function() {
    clearInterval(int);
    btn.innerHTML = "Download Complete";
    btn.style.opacity = "0.5";
  }, 10000);
});