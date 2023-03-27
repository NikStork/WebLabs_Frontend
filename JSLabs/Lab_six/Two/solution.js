
function solve() {
    let text = document.getElementById("text").value;
    let naming_convention = document.getElementById("naming-convention").value;

    let result = convertCase(text, naming_convention);

    document.getElementById("result").textContent = result;
}

function convertCase(str, caseOption) {
    const words = str.split(' ');
    let output;

    if (caseOption.toLowerCase() === 'camel case') {
        output = words.map((word, index) =>
            index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join('');
    }
    else if (caseOption.toLowerCase() === 'pascal case') {
        output = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
    }
    else {
        output = 'Error!';
    }

    return output;
}