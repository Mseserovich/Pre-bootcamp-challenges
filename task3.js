function checkSixFive (num1, num2){
    if ((num1 + num2 === 65) || ((num1 || num2) === 65)){
        return true;
    }
    else return false;
}

console.log(checkSixFive(65, 3));