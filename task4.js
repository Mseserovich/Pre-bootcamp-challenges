function checkNum(num1, num2){
    let sum = [num1 + num2].join('');
    
    for (let i = 0; i < sum.length; i++){
        console.log(sum[i]);
        if ((num2 === 3 || num1 === 3) && sum[i] === '3'){
            return true;
        }
    }
    return false;
}