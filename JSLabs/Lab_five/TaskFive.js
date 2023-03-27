
// Выполнил: Филоненко Никита УВП-311

// Task №1
function employees(array) {
    let obj = [];

    for (let i = 0; i < array.length; i++) {
        const object = {
            name: array[i],
            persN: array[i].length
        }

        obj.push(object);
    }

    for (let i = 0; i < obj.length; i++) {
        console.log(`\nName: ${obj[i].name} - Personal Number: ${obj[i].persN}`);
    }
}

// employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])

// Task №2
function cities(array) {
    let obj = [];

    for (let i = 0; i < array.length; i++) {
        const [city, latitude, longitude] = array[i].split(" | ").map((n) => n.trim());

        obj.push({
            town: city,
            latitude: parseFloat(latitude).toFixed(2),
            longitude: parseFloat(longitude).toFixed(2)
        });
    }

    for (let i = 0; i < obj.length; i++) {
        console.log(`\n{ town: '${obj[i].town}', latitude: '${obj[i].latitude}', longitude: '${obj[i].longitude}' }`);
    }
}

// cities(['Moscow | 55.7522 | 37.6156', 'Beijing | 39.913818 | 116.363625'])

// Task №3
function shop(arrayOne, arrayTwo) {
    let obj = [];

    for (let i = 0; i < arrayOne.length; i += 2) {
        const product = arrayOne[i];
        const quantity = parseInt(arrayOne[i + 1]);

        obj.push({
            product: product,
            quantity: quantity
        });
    }

    for (let i = 0; i < arrayTwo.length; i += 2) {
        const product = arrayTwo[i];
        const quantity = parseInt(arrayTwo[i + 1]);
        let searchProduct = obj.find(pr => pr.product === product);

        if (searchProduct !== undefined) {
            searchProduct.quantity += quantity;
        }
        else {
            obj.push({
                product: product,
                quantity: quantity
            });
        }
    }

    for (let i = 0; i < obj.length; i++) {
        console.log(`${obj[i].product} -> ${obj[i].quantity}`)
    }
}

// shop(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);

// Task №4
function films(array) {
    let obj = [];

    for (let i = 0; i < array.length; i++) {
        let wordToken = array[i].split(" ");

        if (wordToken[0] === "addMovie") {
            obj.push({
                name: wordToken.slice(1, 5).join(" "),
                director: "",
                date: ""
            });
        }
        else {
            let searchMovies = obj.find(movie => movie.name === wordToken[0]);
            let searchMoviesDouble = obj.find(movie => movie.name === wordToken.slice(0, 3).join(" "))

            if (searchMovies !== undefined) {
                if (wordToken[1] === "directedBy") {
                    searchMovies.director = wordToken.slice(2).join(" ");
                }
                else if (wordToken[1] === "onDate") {
                    searchMovies.date = wordToken.slice(2).join(" ");
                }
            }
            else if (searchMoviesDouble !== undefined) {
                if (wordToken[3] === "directedBy") {
                    searchMoviesDouble.director = wordToken.slice(3).join(" ");
                }
                else if (wordToken[3] === "onDate") {
                    searchMoviesDouble.date = wordToken.slice(3).join(" ");
                }
            }
        }
    }

    let validMovies = obj.filter(movie => movie.name !== '' && movie.director !== '' && movie.date !== '');
    let print = JSON.stringify(validMovies);

    console.log(print)
}

films(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola','Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen']);
