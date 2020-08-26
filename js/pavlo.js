let firstName = "Pavlo";
let age;
let pet;
// alert(firstName);

console.log(firstName);

firstName = prompt("Напишіть ваше ім'я");
alert(firstName);

age = prompt("Введіть ваш вік");
if (age >= 18) {
  alert("Ви можете голосувати.")
} else {
  alert("Ви не можете голосувати")
}

pet = prompt("Який у вас домашній улюбленець?");

// if (pet === "cat") {
//   alert("meow")
// } else if (pet === "dog") {
//   alert("bark")
// } else if (pet === "cow") {
//   alert("mooo...")

switch(pet) {
  case "cat":
    alert("meow")
    break;

  case "dog":
    alert("bark")
    break;

  case "caw":
   alert("mooo")
   break;

  default:
    alert("I don\`t know this animal.");
}
