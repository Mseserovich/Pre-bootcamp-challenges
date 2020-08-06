function vowelsplit(str){
    let val = [];
    let list = [...str];
    val = [...list];
    list.filter((x)=>{
        if (x === 'a' || x === 'A' || x === 'e' || x === 'E' || x === 'i' || x === 'I' || x === 'o' || x === 'O' || x === 'u' || x === 'U'){
            val.splice(val.indexOf(x), 1);
        }
        
    })
    let val2 = val.join('');
    //console.log(list, val2);
    return val2;
    

}

vowelsplit('Mseserovicha');