var firstName = 'maks';
var age;
var homePet;
//alert(firstName);

console.log(firstName);

firstName = prompt('Як тебе звати ? ');

age = prompt('Скільки тобі років ? ');
if (age >= 18){
  alert('Ти можеш голосувати ');
}else{
  alert('Ти не можеш голосуваи ');
}

homePet = prompt('Який у тебе домашній улюбленець ?');
switch (homePet) {
  case 'кіт':
    alert('мяу');
    break;
  case 'собака':
    alert('гав');
    break;
  case 'змія':
    alert('сссссс');
    break;
}