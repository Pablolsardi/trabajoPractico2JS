// 15- Realiza un script que cuente el número de vocales que tiene un texto.

let texto = prompt("Ingrese un texto:");
let tamaño = texto.length;
let vocales = "aeiou";
let c;

for(let i=0 ; i<tamaño ; i++){
    for(j=0 ; i<4 ; i++){
        if(texto.charAt(i)==vocales.charAt(j)){
            c++;
            break;
        }
    }
alert("'" + texto + "'" + " tiene " + c + " vocales");
}