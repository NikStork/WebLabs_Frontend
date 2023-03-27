
// Выполнил: Филоненко Никита УВП-311

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Task №1
function groupType(value) {
    if (value <= 2 && value > -1) {
        console.log("младенец.");
    }
    else if (value <= 13 && value >= 3) {
        console.log("ребенок.");
    }
    else if (value <= 19 && value >= 14) {
        console.log("подросток.");
    }
    else if (value <= 65 && value >= 20) {
        console.log("взрослый.");
    }
    else if (value >= 66) {
        console.log("пожилой.");
    }
    else {
        console.log("Try again.")
    }
}

// Task №2
function rounding(value, quantityNumber) {
    var multiplier = Math.pow(10, quantityNumber);
    console.log(Math.round(value * multiplier) / multiplier);
}

// Task №3
function divisor(value) {
    if (value % 10 === 0) {
        console.log("The number is divisible by 10.")
    }
    else if (value % 7 === 0) {
        console.log("The number is divisible by 7.")
    }
    else if (value % 6 === 0) {
        console.log("The number is divisible by 6.")
    }
    else if (value % 3 === 0) {
        console.log("The number is divisible by 3.")
    }
    else if (value % 2 === 0) {
        console.log("The number is divisible by 2.")
    }
    else {
        console.log("not shared.")
    }
}

// Task №4
function vacation(groups, types, days) {
    if (groups >= 30 && types === "Students" || groups >= 100 && types === "Corporate" || 20 >= groups >= 10  && types === "Regular") {
        if (days === "Friday") {
            let totalStudents = (8.45 * groups) - (((8.45 * groups) / 100) * 15);
            let totalRegular = (10.90 * groups) - (((10.90 * groups) / 100) * 5);
            let totalCorporate = 15 * (groups - 10);

            const totalPrice_dictionary = new Map([
                ["Students", totalStudents],
                ["Regular", totalRegular],
                ["Corporate", totalCorporate]]);

            console.log("Total price: " + totalPrice_dictionary.get(types))
        }
        else if (days === "Saturday") {
            let totalStudents = (9.80 * groups) - (((9.80 * groups) / 100) * 15);
            let totalRegular = (15.60 * groups) - (((15.60 * groups) / 100) * 5);
            let totalCorporate = 20 * (groups - 10);

            const totalPrice_dictionary = new Map([
                ["Students", totalStudents],
                ["Regular", totalRegular],
                ["Corporate", totalCorporate]]);

            console.log("Total price: " + totalPrice_dictionary.get(types))
        }
        else if (days === "Sunday") {
            let totalStudents = (10.46 * groups) - (((10.46 * groups) / 100) * 15);
            let totalRegular = (16 * groups) - (((16 * groups) / 100) * 5);
            let totalCorporate = 20.5 * (groups - 10);

            const totalPrice_dictionary = new Map([
                ["Students", totalStudents],
                ["Regular", totalRegular],
                ["Corporate", totalCorporate]]);

            console.log("Total price: " + totalPrice_dictionary.get(types))
        }
        else {
            console.log("Try again.")
        }
    }
    else {
        if (days === "Friday") {
            let totalStudents = 8.45 * groups;
            let totalRegular = 10.90 * groups;
            let totalCorporate = 15 * groups;

            const totalPrice_dictionary = new Map([
                ["Students", totalStudents],
                ["Regular", totalRegular],
                ["Corporate", totalCorporate]]);

            console.log("Total price: " + totalPrice_dictionary.get(types))
        }
        else if (days === "Saturday") {
            let totalStudents = 9.80 * groups;
            let totalRegular = 15.60 * groups;
            let totalCorporate = 20 * groups;

            const totalPrice_dictionary = new Map([
                ["Students", totalStudents],
                ["Regular", totalRegular],
                ["Corporate", totalCorporate]]);

            console.log("Total price: " + totalPrice_dictionary.get(types))
        }
        else if (days === "Sunday") {
            let totalStudents = 10.46 * groups;
            let totalRegular = 16 * groups;
            let totalCorporate = 22.5 * groups;

            const totalPrice_dictionary = new Map([
                ["Students", totalStudents],
                ["Regular", totalRegular],
                ["Corporate", totalCorporate]]);

            console.log("Total price: " + totalPrice_dictionary.get(types))
        }
        else {
            console.log("Try again.")
        }
    }
}

// Task №5
function checking(value) {
    if (value % 4 === 0 || value % 400 === 0) {
        console.log("yes")
    }
    else {
        console.log("no")
    }
}

readline.question('\nselect the issue number:\n 1) Task 1. Age\n 2) Task 2. Rounding\n 3) Task 3. Divisor\n 4) Task 4. Vacation\n 5) Task 5. Checking\nYour choice: ', choice => {
    if (parseInt(choice) === 1) {
        readline.question("Enter number: ", value => {
            groupType(value);
            readline.close()
        });
    }
    else if (parseInt(choice) === 2) {
        readline.question("Enter a: ", a => {
            readline.question("Enter b: ", b => {
                rounding(parseFloat(a), parseInt(b));
                readline.close()
            });
        });
    }
    else if (parseInt(choice) === 3) {
        readline.question("Enter number: ", value => {
            divisor(parseInt(value))
            readline.close()
        });
    }
    else if (parseInt(choice) === 4) {
        readline.question("Enter groups: ", groups => {
            readline.question("Enter types: ", types => {
                readline.question("Enter days: ", days => {
                    vacation(groups, types, days);
                    readline.close()
                });
            });
        });
    }
    else if (parseInt(choice) === 5) {
        readline.question("Enter number: ", value => {
            checking(parseInt(value))
            readline.close()
        });
    }
    else {
        console.log("Try again.")
    }
});

