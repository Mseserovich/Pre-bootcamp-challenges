function max(a, b, c){
    let arr = [a, b, c, ...arguments];
    let max = arr[0];
    
    for(let i = 0; i < arr.length -1; i++){
        if (arr[i + 1] > max){
            max = arr[i + 1];
        }
    }
    return max;
}