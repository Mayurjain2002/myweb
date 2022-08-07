var btn = document.getElementById("btn");
var light = document.getElementById("light");
let audio = new Audio("sounds/crash.mp3");

function togglebtn(){
    btn.classList.toggle("active");
    light.classList.toggle("on");
    // audio.play();
}