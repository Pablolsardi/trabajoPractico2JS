// 1) Consulte el saldo, 2) Ingrese dinero, 3) Extraiga dinero, 4) Salir

let saldo=0;
let depositar=0;
let extraer=0;
let opcion=0;

do{
    opcion = parseInt(prompt("1-Consulte el saldo | 2-Ingrese dinero | 3-Extraiga dinero | 4-Salir"));
    switch(opcion){
        case 1: 
            alert("Su saldo es: $" + saldo);
            break;

        case 2: 
            depositar = parseFloat(prompt("Ingrese el monto a depositar: "));
            if (!isNaN(depositar)){
                saldo += depositar;
                alert("Su nuevo saldo es: $" + saldo);
            }else{
                alert("Monto inválido");
            }
            break;

        case 3: 
            extraer = parseFloat(prompt("Ingrese el monto a extraer: "));
            if (!isNaN(extraer)){
                if(extraer>saldo){
                    alert("Saldo insuficiente. Su saldo actual es $" + saldo + " y usted quiere extraer $" + extraer);
                    break;
                }
                saldo -= extraer;
                alert("Su nuevo saldo es: $" + saldo);
            }else{
                alert("Monto inválido");
            }
            break;

        case 4:
            break;

        default:
            alert("Opción inválida");
            break;
    }

}while(opcion!==4);