//Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInerHTML = this.innerHTML;
    makeSound(buttonInerHTML);
    buttonAnimation(buttonInerHTML);
  });
}

//Detecting Keyboard Press. In the parameter event you get the key(letter and other parameters) got type.
//You write "document.addEventListener" It will look in the entire document for a Keyboard detected, instead of a specific button.
document.addEventListener("keydown", function(event) {
  makeSound(event.key); //Key is a property of the event, that has the key(the letter that got type).
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default: console.log(buttonInerHTML);
  }
}

//When you press the button It change color for a second and
//come back to normal.
function buttonAnimation(currentKey) {
   //T get the class of the currentKey, It is just a single character,
   //we add "." to get document.querySelector(".k");
   var activeButton = document.querySelector("." + currentKey);
   //How to add a class to an element:
   activeButton.classList.add("pressed");

   //Remove the pressed class. 100 is the second parameter (0.1 seconds)
   setTimeout(function() {
     activeButton.classList.remove("pressed");
   },300 );

}
