// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

let edades = [];
let nombres = [];

for(let i=1 ; i<=3 ; i++){
    edades.push(parseInt(prompt("Ingrese la edad " + i + ":")));
    nombres.push(prompt("Ingrese el nombre " + i + ":"));
}

let maxEdad = Math.max(...edades);
let maxNombre = "";
for(let i=1 ; i<=3 ; i++){
    if(edades[i] === maxEdad){
        maxNombre = nombres[i];
        break;
    }
}

alert("El mayor es " + maxNombre + " con " + maxEdad + " años")