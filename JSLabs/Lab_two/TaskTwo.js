
// Выполнил: Филоненко Никита УВП-311

// Task №1
function sumNumbers(value) {
    var result = 0;
    var temp = "" + value;

    for (let i = 0; i < temp.length; i++) {
        result += +temp[i]
    }
    console.log(result);
}

// sumNumbers(123);
// sumNumbers(112233);

// Task №2
function symbolInLine(a, b, c) {
    console.log(`${a}${b}${c}`)
}

// symbolInLine("a", "b", "c");
// symbolInLine("1", "5", "p");

// Task №3
function infAboutCity(a, b, c) {
    console.log(`Town ${a} has population of ${b} and area ${c} square km.`)
}

// infAboutCity("Moscow", 12636312, 2561);

// Task №4
function calculator(aNum, bOp, cNum) {
    if (bOp === "+") {
        console.log((aNum + cNum).toFixed(2));
    }
    else if (bOp === "-") {
        console.log((aNum - cNum).toFixed(2));
    }
    else if (bOp === "/") {
        console.log((aNum / cNum).toFixed(2));
    }
    else if (bOp === "*") {
        console.log((aNum * cNum).toFixed(2));
    }
    else {
        console.log("Try again.")
    }
}

calculator(1, "+", 4);

// Task №5
function convertToInt(value) {
    var temp = 0;
    value = value.split('').reverse().join('');

    for (let i = 0; i < value.length; i++) {
        if (value[i] === "1") {
            temp += 2 ** parseInt(i);
        }
    }
    console.log(temp);
}

convertToInt("11110000");
convertToInt("11011010101010101");



