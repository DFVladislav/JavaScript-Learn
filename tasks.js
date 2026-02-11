// // Задача 1

// let sum = +prompt("Введите сумму вашей покупки")
// if (sum > 999 && sum <= 1000) {
//     console.log("Cкидка 10%")
// }
// else if (sum >=1000 && sum <=1999) {
//     console.log("Скидка 15%")
// }
// else if (sum >=2000){
//     console.log("Скидка 20%")
// }
// else {
//     console.log("Скидка 0%")
// }


// Задача 2

// let word = prompt("Введите слово")
// if (word.includes("К") || word.includes("к")) {
//     console.log("В слове есть буква К");
// }

// else {
//     console.log("В слове нет буквы К")
// }

// Задача 3

// let a = +prompt("Введите ваше число")
// switch (a) {
//     case 1:
//         console.log("Понедельник")
//         break
//     case 2:
//         console.log("Вторник")
//         break

//     case 3:
//         console.log("Среда")
//         break
//     case 4:
//         console.log("Четверг")
//         break
//     case 5:
//         console.log("Пятница")
//         break
//     case 6:
//         console.log("Суббота")
//         break
//     case 7:
//         console.log("Воскресенье")
//         break
//     default:
//         console.log("Нет такого дня недели")
//         break
// }


// Задача 4

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 1) continue
//         alert(i)
// }

// Задача 5
// let randoms = Math.floor(Math.random() * 50) + 1;
// console.log(randoms);
// let question = 0;
// while (question !== randoms) {
//     question = +prompt("Введите число от 1 до 50")
//     if (question == randoms) {
//         alert("Верно")
//     }
//     else if (question < randoms) {
//         alert("Мимо")
//     }
//     else {
//         alert("Много")
//     }
// }


// Задача 6

// let first = +prompt("Введите баллы за первый предмет")
// let second = +prompt("Введите баллы за второй предмет")
// let third = +prompt("Введите баллы за третий предмет")
// let sum = first + second + third
// alert(`Всего баллов ${sum}`)
// let arifmetic = sum / 3;
// alert(`Среднее арифметическоe ${arifmetic}`)
// if (arifmetic < 65) {
//     alert("Ваша оценка 2")
// }
// else if (arifmetic >= 65 && arifmetic <= 74) {
//     alert("Ваша оценка 3")
// }
// else if(arifmetic >= 75 && arifmetic <=89) {
//     alert("Ваша оценка 4")
// }
// else {
//     alert("Ваша оценка 5")
// }

// Задача 7

// let youword = prompt("Введите ваше слово");
// console.log("Количество символов", youword.length);
