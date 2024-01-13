const multiValueArray = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];
console.log(multiValueArray [3][2])
console.log(multiValueArray[3].length)
console.log(multiValueArray [4][2])


const arr = [
    1,
    [33, 34, 45],
    ["test", "test2"],
    "string",
    {
        name: "Pawel",
        age: 18
    }
]

// console.log(arr[1][0])

// arr.forEach(function (array) {
//     if (Array.isArray(array)) {
//         array.forEach(function (el) {
//             console.log(el)
//         })
//
//         return;
//     }
//     console.log(array)
// })

function printValue(value) {
    if (Array.isArray(value)) {
        value.forEach(function (el) {
            printValue(el)
        })

        return;
    } else if (typeof value === "object") {
        Object.values(value).forEach(function (el) {
            printValue(el)
        })

        return;
    }

    console.log(value)
}

printValue(arr)


