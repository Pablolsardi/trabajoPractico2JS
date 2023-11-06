// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un 
// «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let acum=0;
let numero;

do{
    input = prompt("Ingrese un número:");
    if(input===null){
        break;
    }
    numero = parseFloat(input);

    if(isNaN(numero)){
        alert("Ingrese un numero válido");
    }else{
        acum+=numero;
    }
}while(true);

alert("La suma es: " + acum);