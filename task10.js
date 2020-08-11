function vowelsplit(str){
    let val = [];
    let list = [...str];
    let val2 = [];
    val = [...list];
    list.filter((x)=>{
        if (x === 'a' || x === 'A' || x === 'e' || x === 'E' || x === 'i' || x === 'I' || x === 'o' || x === 'O' || x === 'u' || x === 'U'){
            val2 += val.splice(val.indexOf(x), 1);
        }
        
    });
    
    return val2;

}

vowelsplit('Mseserovicha');