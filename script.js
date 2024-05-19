function calcAdd(num1 , num2){
    return num1 + num2
}
function calcSub(num1, num2){
    return num1 - num2 
}
function calcMult(num1, num2){
    return num1 * num2
}
function calcDiv(num1 , num2){
    return num1 / num2
}

let firstNum = ''
let operator = ''
let secondNum = ''

function calculateNums(firstNumber, operatorSign , secondNumber){
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber)
    if (operatorSign === "+"){
        return calcAdd(num1 , num2)
    }else if (operatorSign === "-"){
        return calcSub(num1 ,num2)
    }else if (operatorSign === "*"){
        return calcMult(num1 ,num2)
    }else if (operatorSign === "/"){
        return calcDiv(num1 ,num2)
    }else{
        return "ERROR: Invalid Operator"
    }}

firstNum = '20'
secondNum = '23'
operator = '*'
