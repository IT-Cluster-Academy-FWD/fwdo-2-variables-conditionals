var firstName = "Olena";

var yourAge;

alert(firstName);

console.log(firstName);

firstName = prompt("What is your name?");

yourAge = prompt("How old are you?");

if (yourAge >=18) {
  alert("You can vote");
} else {
  alert("You can't vote");
}

var animal = prompt("Do you have a pet?");

/*if (animal === "cat") {
  alert("Meow");
} else if (animal === "dog") {
  alert("Bark");
} else if (animal ==="cow") {
  alert("Moo");
} else {
  alert("I don't Know this animal");
}*/

switch(animal) {
  case "cat":
    alert("Meow");
    break;
  case "dog":
    alert("Bark");
    break;
  case "cow":
    alert("Moo");
    break;
  default:
    alert("I don't Know this animal");
    break;
}