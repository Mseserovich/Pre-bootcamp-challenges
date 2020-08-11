function max(...arguments){
    let arr = [...arguments];

    let maxi = arr[0];

    for(let i = 0; i < arr.length -1; i++){
        if (arr[i + 1] > maxi){
            maxi = arr[i + 1];
        }
    
    }
    
    return maxi;
}