// Задача 1
// let login = prompt("Введите ваш логин для авторизации")
// let password = prompt("Введите ваш пароль")
// if (login == "admin" && password == "password") {
//     console.log("Доступ разрешен")
// }
// else {
//     console.log("В доступе отказано")
// }



// Задача 2

// let x = +prompt("Введите точку x")
// let y = +prompt("Введите точку y")
// if (x > 0 && y > 0) {
//     console.log("Точка расположена в 1-й четверти")
// }
// else if (x < 0 && y > 0 ) {
//     console.log("Точка расположена во 2-й четверти")
// }
// else if (x < 0 && y < 0) {
//     console.log("Точка расположена в 3-й четверти")
// }

// else {
//     console.log("Точка расположена в 4-й четверти")
// }

// Задача 3
// let a = +prompt("Введите первую сторону треугольника")
// let b = +prompt("Введите вторую сторону треугольника")
// let c = +prompt("Введите третью сторону треугольника")
// if (a + b <= c || b + c <= a || c + a <= b) {
//     console.log("Такого треугольника не существует")
// }
// else if (a == b && b == c) {
//     console.log("Равносторонний треугольник")
// }
// else if (a == b || b == c || a == c) {
//     console.log("Треугольник равнобедренный")
// }
// else if (a * a + b * b == c * c || b * b + c * c == a * a || a * a + c * c == b * b) {
//     console.log("Прямоугольный треугольник")
// }
// else {
//     console.log("Треугольник разносторонний")
// }



// let age = +prompt("Введите ваш возраст")
// function checkAge(age) {
//     if (age <= 18) {
//         return "Доступ запрещен"
//     }
//     else {
//         return "Доступ разрешен "
//     }
// }
// let result =  checkAge(age)
// console.log(result)


// let laptop = {
//     brand: "Asus",
//     price: 500,
//     isWorking: true,
// }
// function upPrice(price) {
//     price.price = laptop.price + 500
//     return laptop.price
// }
// let sum = upPrice(laptop)
// console.log(sum)
// console.log(laptop.price)


// let user = {
//     name: "Admin",
//     score: 10
// }
// function doubleScore(obj) {
//     obj.score = user.score* 2
// }
// let result = doubleScore(user)
// console.log(user)

// let cart = ["Хлеб", "Молоко"];

// function addToCart(item) {
//     cart.push(item); // Пишем метод прямо внутри тела функции
//     console.log(item + " добавлен в корзину!");
// }

// addToCart("Колбаса");
// console.log(cart); // ["Хлеб", "Молоко", "Колбаса"]


// let numbers = [10, 20, 30]
// let lastNum = numbers.pop()    -pop и прочие функции сохраняют значение массива который можно потом вывести
// console.log(lastNum)
// console.log(numbers)


// let array = [ 1, 2, 3, 4]
// function sumArray(numbers) {
// let sum = 0
// for (let i = 0; i < numbers.length; i++)
//     sum += numbers[i]
// return sum;
// }


// let result  = sumArray(array)
// console.log(result)
// console.log(array)

// let number = +prompt("Введите число")
// function isEven(a) {
//     if (a % 2 == 0)
//         return true
//     else {
//         return false
//     }
// }
// let result = isEven(number)
// console.log(result)

// const user = {
//     name: "Ivan",
//     age: 25
// };

// function sayHi(person) {

//     console.log("Привет, меня зовут " + person.name + ", мне " + person.age + " лет");
// }

// sayHi(user); 


const users = [
  { name: "Аня", age: 17 },
  { name: "Игорь", age: 25 },
  { name: "Олег", age: 14 },
  { name: "Маша", age: 19 }
];

// users.forEach(function(user) {
//     if (user.age > 18) {
//         console.log(user.name);         // - перебор по возрасту
//     }
// });

users.forEach(function(user){
    
})
