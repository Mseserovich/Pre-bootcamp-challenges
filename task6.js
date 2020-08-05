function max(a, b, c){
    let arr = [...arguments];
    console.log(arr.length)
    let maxi = arr[0];

    for(let i = 0; i < arr.length -1; i++){
        if (arr[i + 1] > maxi){
            maxi = arr[i + 1];
        }
    
    }
    console.log(maxi);
    return maxi;
}

max(3, -1000);