// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” 
// deberá mostrar “lat euq aloh”.

let texto = prompt("Ingrese un texto:");
let tamaño = texto.length;
let textoReverse = "";

for (let i=(texto.length-1) ; i>=0 ; i--) {
    textoReverse = textoReverse + texto[i];
}

alert(textoReverse);