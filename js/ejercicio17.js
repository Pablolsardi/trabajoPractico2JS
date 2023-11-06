// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

// Ejemplo:

// Input: Hola mundo
// Output: la vocal ‘o’ está en la posición 1

let texto = prompt("Ingrese un texto:");
let tamaño = texto.length;
let vocales = "aeiou";
let vocal = "";
let pos = -1;

for (let i = 0; i < tamaño; i++) {
    for (let j = 0; j < 5; j++) { // Asegúrate de que j llegue hasta 4
        if (texto.charAt(i) === vocales.charAt(j)) {
            vocal = vocales.charAt(j);
            pos = i;
            break;
        }
    }
    if (vocal !== '') {
        break;
    }
}

if (vocal !== '') {
    alert("La vocal '" + vocal + "' está en la posición " + pos);
} else {
    alert("No se encontraron vocales en el texto.");
}