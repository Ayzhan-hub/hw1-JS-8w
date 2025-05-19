// Задание 1: Имя и возраст.  Меня зовут Айжан Кудайбергенова, и мне 35 лет
const firstName = "Айжан";
const lastName = "Кудайбергенова";
const age = 35;

const message = `Меня зовут ${firstName} ${lastName}, и мне ${age} лет`;
console.log(message);

// Я родом из города Алматы
const city = "Алматы";
const message2 = "Я родом из города " + city;
console.log(message2);

//password & hasAccess (true)
const password = "qwerty";
const hasAccess = password !== "";
console.log("password:", password);
console.log("hasAccess:", hasAccess);

//password2 & hasAccess2 (false)
const password2 = "";
const hasAccess2 = password2 !== "";
console.log("password:", password2);
console.log("hasAccess:", hasAccess2);

//isMember-false
let isMember = false;
let stringIsMember = isMember.toString();
console.log(stringIsMember, typeof stringIsMember);

//cartItems возвращает false
let cartItems = 0;
let isTrue = Boolean(cartItems);
console.log(isTrue); //ответ false, потому ччто логическое значение нуля является false, поэтому cartItems возвращает false.

//averageScore toFixed(1)
let averageScore = 89.75695;
averageScore = parseFloat(averageScore.toFixed(1));
console.log(averageScore);

// //trim "      Приветствуем вас в мире программирования!        "
// let greetingMessage = "      Приветствуем вас в мире программирования!        ";
// let TgreetingMessage = greetingMessage.trim();
// console.log(TgreetingMessage);

// //uppercase
// let UgreetingMessage = TgreetingMessage.toUpperCase();
// console.log(UgreetingMessage);

// //includes
// let IgreetingMessage = greetingMessage.includes("программирования");
// console.log(IgreetingMessage); // true-содержит

// //prompt("Введите свой возраст:")
// let userAge = prompt("Введите свой возраст:");

// if (userAge === null || userAge.trim() === "") {
//   console.log("Вы не ввели свои данные");
// } else {
//   userAge = Number(userAge);

//   if (isNaN(userAge)) {
//     console.log("Недопустимый формат. Введите число");
//   } else if (userAge < 18) {
//     console.log("Доступ ограничен!");
//   } else {
//     console.log("Добро пожаловать!");
//   }
// }

// //prompt(7)
// let num = 7;
// let userNum = prompt("Введите число от 1 до 10:");
// if (num == userNum) {
//   console.log("Вы угадали");
// } else if (num < userNum) {
//   console.log("Слишком велико");
// } else {
//   console.log("Слишком мало");
// }

// приложение, которое помогает пользователю выбрать напиток в зависимости от времени суток.
let Time = prompt("Введите время суток (утро, день, вечер):");

if (Time === null || Time.trim() === "") {
  alert("Ошибка: вы не ввели данные.");
} else if (typeof Time !== "string") {
  alert("Ошибка: введено не строковое значение.");
} else {
  Time = Time.trim().toLowerCase();

  if (Time === "утро") {
    alert("Доброе утро! Рекомендуем выпить кофе");
  } else if (Time === "день") {
    alert("Добрый день! Попробуйте чай");
  } else if (Time === "вечер") {
    alert("Хорошего вечера! Подойдёт горячий шоколад");
  } else {
    alert("Ошибка: допустимые значения — утро, день или вечер.");
  }
}
