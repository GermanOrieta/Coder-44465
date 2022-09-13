let monto = parseInt(prompt("Ingrese monto a pagar"));
let cuotas = parseInt(prompt("Ingrese cantidad de cuotas"));

function dividir(monto, cuotas){
    return monto / cuotas;
    }

let resultado = dividir(monto,cuotas);
let mensaje = `Usted pagara $${resultado} por cuota.`;

alert(mensaje)