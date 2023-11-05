// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario 
// (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

let numero;

do{
    numero = parseInt(prompt("Ingrese un número tope para la pirámide:"));

    if(numero>1 && numero<=50){
        for(let i=0 ; i<=numero ; i++){
            for(let j=1 ; j<i+1 ; j++){
                document.write(j);
            }
            document.write("<br>")
        }
    }else{
        alert("Ingrese un número entre 0 y 50");
    }
}while(numero<0 || numero>50);
