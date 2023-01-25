const todoListID_1 = "23gjj85"
const todoListID_2 = "23gjj86"

const todoLists = [
    {
        id: todoListID_1,
        title: "What to learn",
        filter: "all",
    },
    {
        id: todoListID_2,
        title: "What to buy",
        filter: "all",
    },
]

const getPropName = (param) => `${param}key`

const tasks = {
    [todoListID_1]: [
        {id: 12, name: "HTML", isDone: true},
        {id: 13, name: "CSS", isDone: false}
    ],
    [todoListID_2]: [
        {id: "24", name: "Meat", isDone: true},
        {id: "22", name: "Milk", isDone: false}
    ],
    [10 + 30]: [], //["40"]
    [getPropName("object_")]: []//"object_key"
}
//reduce => свёртка
const nums = [1, 2, 3, 4]
console.log(nums.reduce((acc, el) => acc + el), 0)

//0+1 => 1
//1 + 2 => 3
//3+3 => 6
//6+4 => 10//

let students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 26,
        isMarried: false,
        scores: 100
    }
];

console.log(students.reduce((acc, el) => acc + el.scores, 0))
console.log(students.reduce((acc, el) => acc.scores > el.scores ? acc : el))


const newStudents = {
    "1": {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    "2": {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
}

console.log(students.reduce((acc, el) => {
    acc[el.id] = {...el}
    delete acc[el.id].id
    return acc
}, {}))

function itReduce(func, startValue) {
    let acc = startValue
    for (let i = 0; i < this.length; i++) {
        acc = func(acc, this[i])
    }
    return acc
}
Array.prototype.itReduce = itReduce
console.log([1,2,3,4].itReduce((acc, el)=>acc + el, 0))