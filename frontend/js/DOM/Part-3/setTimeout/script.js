var btn= document.querySelector('button')
var h5 = document.querySelector('h5')
var check=0
function addFriend() {
  h5.innerHTML = "request sending...";
  h5.style.color = "blue";
    setTimeout(function() {
      if(check === 0) {
      console.log("Button clicked");
      h5.innerText = "Friends";
      h5.style.color = "green";
      btn.innerHTML = "Remove Friend";
      check = 1;
  } else {
    h5.innerText = "Stranger";
    h5.style.color = "red";
    btn.innerHTML = "Add Friend";
    check = 0;
    }
  }, 3000);
}
btn.addEventListener('click', addFriend);