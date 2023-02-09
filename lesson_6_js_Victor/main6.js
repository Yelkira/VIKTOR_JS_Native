
//1. сортирует строки "из коробки", т.е. без доп. параметров
const str1 = ["Bob", "Alex", "John"]
console.log(str1.sort())

//2. сортирует строки типа по "алфавиту" (unicode)
const str2 = ["Bob", "Alex", "John", "john", "123", "игорь", "Юрий", "ЮРИЙ"]
console.log(str2.sort())

//3. работает мутабельно (сортирует массив на месте)
console.log(str2)

//4. возвращает ссылку на исходный массив
console.log(str2 === str2.sort())

//5. Для остальных случаев необходимо передать функцию сравнения (callback)

const numbers = [1000, "+20", -500, 77, 9]
console.log(numbers.sort())
const compareFn = (a, b) => {//по возрастанию
    if(a > b){   // надо переставить, >0!!!
        return 5
    } else {      // HЕ надо переставить, <0!!!
        return -22
    }
}
//6. Функция сравнения должна возвращать число большее или меньшее 0
console.log(numbers.sort((a, b) => a - b))

//7.Вместе с sort часто используется revers
console.log(numbers.reverse())

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 24,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 24,
        isMarried: true,
        scores: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 22,
        isMarried: true,
        scores: 89
    },
];

//7. Сортировка массива объектов по строковым значениям
//a. Регистрозависимая
const compareObjByName = (a, b) => {
    if(a.name > b.name){
        return 1
    } else {
        return -1
    }
}
console.log(students.sort(compareObjByName))
//б. РегистроНЕзависимая
console.log(students.sort((a, b)=> a.name.localeCompare(b.name)))

//8. Сортировка массива объектов по числовым значениям
console.log(students.sort((a,b) => a.scores - b.scores))


//bubble sort

const numbersJS = [ 1, 9, 12, 22, 34, 67,]  // j = 1


for (let j = 0; j < numbersJS.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < numbersJS.length - 1 - j; i++) {
        if(numbersJS[i] > numbersJS[i + 1]){   // если true - надо переставить
            isSorted = false;
            [numbersJS[i + 1], numbersJS[i]] = [numbersJS[i], numbersJS[i + 1]]
        }
    }
    if(isSorted)break
}



console.log(numbersJS)

//O(n^2) => O((n-1)^2)=> O((n-1)*((n-1)/2))

// 3,4
// a = a + b  => a = 7
// b = a - b  => b = 3
// a = a - b  => a = 4

