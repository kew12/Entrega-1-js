//ejercicio 1
const esPar = (i) => (i % 2 == 0 ? "Es par" : "Es impar");
function esImpar(i) {
    if (i % 2 !== 0) {
        return "Es impar";
    } else {
        return "Es par"
    }
}
// ejercicio 2
function comparar(num1, num2) {
    if (num1 > num2) {
        return num1 + " es mayor que " + num2;
    } else if (num2 > num1) {
        return num2 + " es mayor que " + num1;
    } else {
        return num1 + " y " + num2 + " son iguales";
    }
}



// ejercicio 3
function EsMultiploDeCinco(numero) {
        if (numero % 5 === 0) {
            return numero + " es múltiplo de 5";
        } else {
            return numero + " no es múltiplo de 5";
        }
    }
    

//ejercicio 4
function imprimirDel1al10(numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }
}

//ejercicio 5
function imprimirpalabra(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
        console.log(palabra);
    }
}

//ejercicio 6
function miArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
//ejercicio 7
function ExcluirElQuinto(array) {
    if (array.length !== 10) {
        console.log("El array contiene que contener 10 numeros");
        return;
    } for (let i = 0; i < array.length; i++) {
        if (i !== 4) {  
            console.log(array[i]);
        }
    }
}


// el 8 no supe como hacerlo :,)


