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


function sum (a, b) {
    return a + b
}
console.log (sum(3, 4))