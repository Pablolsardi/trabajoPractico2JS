// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse 
// todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

let arrayCadenas = new Array();
let i=0;    

do{
    let cadena = prompt("Ingrese una cadena:")
    if(cadena !== null){
        arrayCadenas.push(cadena);
        i++;
    }else{
        break;
    }
}while(true)

for(let j=0 ; j<arrayCadenas.length ; j++){
    document.write(arrayCadenas[j]);
    if(j<(arrayCadenas.length - 1)){
        document.write(" - ")
    }
}
