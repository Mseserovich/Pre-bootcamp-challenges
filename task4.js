function checkNum(num1, num2){
    let sum = [num1 + num2].join('');
    num1 = [num1].join('')
    num2 = [num2].join('')
    
    for (let i = 0; i < sum.length; i++){
        if (num2[i] == '3' || num1[i] == '3'){
            for (let j = 0; j < sum.length; j++){
                if (sum[j] == '3'){
                    return true;
                }
            }
        }
    }
    return false;
}