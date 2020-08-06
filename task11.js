function twoStrings(str1, str2){
    let val = [];
    str1 = [...str1];
    //str22 = [...str2];
    str1.forEach(element => {
        let check = str2.indexOf(element)
        if (check >= 0){
            //console.log(str2.indexOf(element));
            val.push(element);
            }
        });
    console.log(`Common letters: ${val.join('')}`);
}

twoStrings('house', 'computers');