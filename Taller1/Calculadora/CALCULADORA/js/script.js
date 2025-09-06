let operacion1 = "";
let operador = "";
let numero = "";
let ultimodigito = "";
let funcionPendiente = "";

let operdigitada = document.getElementById("operaciondigitada");
let result = document.getElementById("resultado");

function borrar() {
    operacion1 = "";
    operador = "";
    numero = "";
    ultimodigito = "";
    funcionPendiente = "";
    operdigitada.innerHTML = "";
    result.innerHTML = "";
}

function digito(num) {
    numero += num;
    if (funcionPendiente !== "") {
        operacion1 = funcionPendiente + "(" + numero + ")";
    } else {
        operacion1 += num;
    }
    operdigitada.innerHTML = operacion1;
    if (ultimodigito === "operacion") ultimodigito = "numero";
}

function operacion(op) {
    if (numero !== "" || operacion1 !== "") {
        operacion1 += op;
        numero = "";
        funcionPendiente = "";
        ultimodigito = "operacion";
        operdigitada.innerHTML = operacion1;
    }
}

function calcular() {
    try {
        let resultado = eval(operacion1);
        result.innerHTML = resultado;
        operacion1 = resultado.toString();
        numero = "";
        funcionPendiente = "";
    } catch (error) {
        result.innerHTML = "Error";
    }
}

function raiz() {
    funcionPendiente = "Math.sqrt";
    operdigitada.innerHTML = "√(";
    numero = "";
}

function trig(funcion) {
    funcionPendiente = "Math." + funcion;
    operdigitada.innerHTML = funcion + "(";
    numero = "";
}

function porcentaje() {
    if (numero !== "") {
        operacion1 = "(" + numero + ")/100";
        operdigitada.innerHTML = operacion1;
        numero = "";
        funcionPendiente = "";
    }
}

function cambiarSigno() {
    if (numero !== "") {
        numero = (-parseFloat(numero)).toString();
        if (funcionPendiente !== "") {
            operacion1 = funcionPendiente + "(" + numero + ")";
        } else {
            operacion1 = numero;
        }
        operdigitada.innerHTML = operacion1;
    }
}

function borrarUltimo() {
    if (numero !== "") {
        numero = numero.slice(0, -1);
        if (funcionPendiente !== "") {
            operacion1 = funcionPendiente + "(" + numero + ")";
        } else {
            operacion1 = operacion1.slice(0, -1);
        }
        operdigitada.innerHTML = operacion1;
    }
}
