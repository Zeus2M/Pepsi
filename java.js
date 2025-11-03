alert("Welcome to Pepsi's Website");


var blue = document.querySelector(".bluepep");
var whit = document.querySelector(".whitepep");
var black = document.querySelector(".blackpep");
var mainSelector = document.querySelector("body");
var white = document.getElementById("whiteimg");
var message = document.getElementById("text");

const toggleBtn = document.getElementById("menu");
const sidebar = document.getElementById("sidebar");
+
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});


blue.addEventListener("click", function(){
mainSelector.style.backgroundColor = "blue";
blue.innerHTML = mainSelector;
white.src = ("bluepepsi.png");
message.innerText = "Pepsi Classic your one and only, Best carbonated drink. Fun, nostalgia, and refreshment all in one go.";
})
whit.addEventListener("click",function(){
    mainSelector.style.backgroundColor = "red";
whit.innerHTML = mainSelector
white.src = ("whitepepsi.png");
message.innerText = "Pepsi  Diet your one and only, Best carbonated drink. Zero sugar, zero calories, guilt free refreshment.";
})
black.addEventListener("click",function(){
     mainSelector.style.backgroundColor = "black";
black.innerHTML = mainSelector
white.src = ("blackpepsi.png");
message.innerText = "Pepsi Max your one and only, Best carbonated drink. Smooth, daring, and built for pure refreshment.";
})