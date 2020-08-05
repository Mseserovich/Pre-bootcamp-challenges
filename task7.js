function converter(temp){
    let fah = (temp / 5) * 9 + 32;
    //console.log(Math.round(fah));
    return fah;
}

converter(23);

function converter2(fah){
    let temp = (fah - 32) / 9 * 5;
    //console.log(Math.round(temp));
    return temp;
}

//converter2(73.4);