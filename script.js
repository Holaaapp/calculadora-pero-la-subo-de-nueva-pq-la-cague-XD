const txtOp1 = document.getElementById("Op1")
const txtOperacion = document.getElementById("Operacion")
const txtOp2 = document.getElementById("Op2")
const btnCalcular = document.getElementById("calcular")
const Resultado = document.getElementById("Resultado")
function calcular(){
  const Operacion = txtOperacion.value
  const operacion1 = parseFloat(txtOp1.value)
  const operacion2 = parseFloat(txtOp2.value)
  if(Operacion == "*" || Operacion == "/" || Operacion == "+" || Operacion == "-"){
let resultado2;
    switch (Operacion){
    case "+":
      resultado2 = operacion1 + operacion2
      break;
      case "*":
        resultado2 = operacion1*operacion2
        break;
        case "-":
            resultado2 = operacion1 - operacion2
            break;
            case "/":
                resultado2 = operacion1/operacion2
} 
Resultado.innerText = "=" + resultado2
  } else if(Operacion == "" || Operacion == " " || Operacion == "  "){
    Resultado.innerText = "acuerdate de poner algun signo para la cuenta :v"
  } else {
    Resultado.innerText = "si vas poner tonteras pues ponte hacer el calculo por ti mismo :v"
  }


  
}
