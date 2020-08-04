function checkNum(num1, num2){
    if ((num1 || num2 == 3) && ((num1 + num2) === 3)){
        return true;
    }
    else return false
}

console.log(checkNum(0, 3));