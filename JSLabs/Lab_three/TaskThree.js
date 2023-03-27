
// Выполнил: Филоненко Никита УВП-311

// Task №1
function opMas(array) {
    var sumSourceArray = 0;
    var sumNewArray = 0;
    var newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArray.push(array[i] + i);
        }
        else {
            newArray.push(array[i] - i);
        }
    }

    console.log(`Измененный массив: [${newArray.join(", ")}]`);

    for (let i = 0; i < array.length; i++) {
        sumSourceArray += array[i];
    }

    console.log(`Сумма исходного массива: ${sumSourceArray}`);

    for (let i = 0; i < newArray.length; i++) {
        sumNewArray += newArray[i];
    }

    console.log(`Сумма измененного массива: ${sumNewArray}`);
}

// opMas([5, 15, 23, 56, 35]);
// opMas([-5, 11, 3, 0, 2]);

// Task №2
function generalElements(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            console.log(a[i]);
        }
    }
}

// generalElements(['R', 'u', 's', 's', 'i', 'a'], ['R', 'u', 't']);

// Task №3
function rotationOfTheArray(a, b) {
    console.log(`\nМассив до вращения: [${a.join(", ")}`);
    a = a.concat(a.splice(0, b));
    console.log(`Массив после вращения: [${a.join(", ")}]`);
    console.log(`\nКоличество оборотов: ${b}`);
}

// rotationOfTheArray([51, 47, 32, 61, 21], 2)

// Task №4
function awesomeMatrix(matrix) {
    const result = matrix.map(arr => {
        return arr.reduce((pre, item) => pre + item, 0)
    })

    for (let i = 0; i < result.length; i++) {
        if (result[i] !== result[i + 1]) {
            console.log("false")
            break
        }
        else {
            console.log("true")
            break
        }
    }
}

awesomeMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]])
awesomeMatrix([[1, 1, 1], [2, 2, 2], [3, 3, 3]])

