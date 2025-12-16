/* TASK 1
let num = prompt("Enter a number:");
if (num > 10) {
  console.log("The number is greater than 10");
} else {
  console.log("The number less than 10");
}
  */

/*TASK 2
let file = confirm("Do you want to delete the file?");

if (file) {
  console.log("File deleted");
} else {
  console.log("File not deleted");
}
  */

/*TASK 3
let age = Number(prompt("Enter your age:"));

if (age < 18) {
  console.log("Ты еще подросток");
} else if (age >= 18 && age <= 30) {
  console.log("Ты молодой взрослый");
} else if (age > 30) {
  console.log("Ты взрослый");
} else {
  console.log("Ты пожилой человек");
}
*/

/*TASK 4
let number = Number(prompt("Enter a number:"));

let result = number % 2 === 0 ? "Четное число" : "Нечетное число";

alert(result);
*/

/*TASK 5
/let day = Number(prompt("Enter a day number (1-7):"));

switch (day) {
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Среда");
    break;
  case 4:
    console.log("Четверг");
    break;
  case 5:
    console.log("Пятница");
    break;
  case 6:
    console.log("Суббота");
    break;
  case 7:
    console.log("Воскресенье");
    break;
  default:
    console.log("Некорректный номер дня");
}
*/
/* TASK 6
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));

if (num1 === num2) {
  alert("Числа равны");
} else {
  let result =
    num1 > num2
      ? "Первое число больше чем второе"
      : "Второе число больше чем первое";

  alert(result);
}
*/
let month = Number(prompt("Enter the month:"));
switch (month) {
  case 12:
  case 1:
  case 2:
    season = "Зима";
    break;
  case 3:
  case 4:
  case 5:
    season = "Весна";
    break;
  case 6:
  case 7:
  case 8:
    season = "Лето";
    break;
  case 9:
  case 10:
  case 11:
    season = "Осень";
    break;
  default:
    season = "Некорректный номер месяца";
}
alert(season);
