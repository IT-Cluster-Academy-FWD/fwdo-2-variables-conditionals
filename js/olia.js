var firstName = "Olia";
var age;
var homePet;

alert(firstName);
console.log(firstName);

firstName = prompt("What's your first name?");

age = prompt("How old are you?");

if (age >= 18) {
  alert("User can vote")
} else {
  alert("User cannot vote")
}

homePet = prompt("Do you have any home pet?");

switch (homePet) {
  case "Cat":
    alert("Meow");
    break;
  case "Dog":
    alert("Hown");
    break;
  case "Bee":
    calert("Buzz");
    break; 
  default:
    alert("Unknown sound");
    break;
  }