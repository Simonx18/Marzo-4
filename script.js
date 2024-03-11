// 1. Controlla se uno dei due numeri è 50 o se la loro somma è 50.
function checkNumber(num1, num2) {
    return num1 === 50 || num2 === 50 || num1 + num2 === 50;
}
console.log(checkNumber(30, 20));

// 2. Rimuove il carattere ad una specifica posizione da una stringa.
function removeCharFromString(str, position) {
    return str.slice(0, position) + str.slice(position + 1);
}
console.log(removeCharFromString("Hello", 1));

// 3. Controlla se due numeri sono compresi tra 40 e 60 o tra 70 e 100.
function checkNumberRange(num1, num2) {
    return (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) || (num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100);
}
console.log(checkNumberRange(50, 55));

// 4. Controlla se il nome della città inizia con "Los" o "New".
function checkCityName(cityName) {
    return cityName.startsWith("Los") || cityName.startsWith("New") ? cityName : false;
}
console.log(checkCityName("Los Angeles"));

// 5. Calcola la somma di tutti gli elementi di un array.
function sumArrayElements(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumArrayElements([1, 2, 3, 4, 5]));

// 6. Controlla se l'array NON contiene i numeri 1 o 3.
function checkArrayElements(arr) {
    return !arr.includes(1) && !arr.includes(3);
}

// 7. Trova il tipo di un angolo dato il suo valore in gradi.
function angleType(degrees) {
    if (degrees < 90) {
        return "acuto";
    } else if (degrees === 90) {
        return "retto";
    } else if (degrees > 90 && degrees < 180) {
        return "ottuso";
    } else if (degrees === 180) {
        return "piatto";
    } else {
        return "gradi non validi";
    }
}
console.log(angleType(45));

// 8. Crea un acronimo a partire da una frase.
function createAcronym(phrase) {
    return phrase.split(' ').map(word => word[0].toUpperCase()).join('');
}
console.log(createAcronym("Fabbrica Italiana Automobili Torino"));