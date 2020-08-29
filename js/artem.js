// var firstName = 'artem';
// var age = prompt("What's your age?");
var pet = prompt("Do you have a pet? If you have, what is it?");
// alert(age);
// alert(firstName);
// console.log(firstName);

// firstName = prompt("What's yor name?");
// console.log(firstName);
// if (age >= 18)  {
//   alert('You are ' + age + ' and you can vote');
// } else {
//   alert('You can`t vote');
// }


switch(pet) {
  case 'cat':
    alert('Meow');
    break;
  case 'dog':
    alert('Bark');
    break;
  case 'parrot':
    alert('Fit`-fit`-fit`');
    break;
  case 'rat':
    alert('Pi-pi-pi');
    break;
  default: 
    alert('I don`t know this kind of animal....');
    break;
}
