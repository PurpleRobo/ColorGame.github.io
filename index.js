var num = 6;
var colors = [];
var pickedColor;

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay =  document.querySelector("#message");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons() {
  for(var i=0; i<modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? num = 3 : num = 6;
      reset();
    });
  }
}

function setUpSquares() {
  for(var i=0; i<num; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
      //It'll check whether the background color of the selected square matches pickedColor
      if (this.style.backgroundColor == pickedColor) {
        changeColor();
        messageDisplay.textContent = "Correct!";
        // messageDisplay.classList.add("timepass");
        h1.style.backgroundColor = pickedColor;
        resetButton.textContent = "Play Again?"
      } else {
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again!";
      }
    })
  }
}

function reset() {
  //Generate all new colors
  colors = randomColorsGenerator(num);
  //pick a new random color from an array
  pickedColor = colors[pickColor()];
  //change color display to match the picked color
  colorDisplay.textContent = pickedColor;
  //make message display empty
  messageDisplay.textContent = "";
  //change color of squares
  for(var i=0; i<squares.length; i++) {
    if(i<num){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = ("New Colors");	
  // messageDisplay.classList.remove("timepass");
}

resetButton.addEventListener("click", function() {
  reset(num);
})

function changeColor() {
  //changes the color of all squares to pickedColor 
  for(var j=0; j<num; j++){
    squares[j].style.backgroundColor = pickedColor;
  }
}

function pickColor() {
  return Math.floor(Math.random()*colors.length);
}

function randomColorsGenerator(num) {
  var arr = [];

  for(var i=0; i<num; i++) {
    //It'll push the color string in the array every time it loops.
    arr.push(randomColor());
  }

  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);

  return "rgb("+r+", "+g+", "+b+")";
}
