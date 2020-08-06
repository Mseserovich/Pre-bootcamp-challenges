function mult(num){
    if (num < 1){
        console.log('enter number greater than one');
        return;
    }
    let i = 1;
    let list = [];
    while(i < num){
        if (i % 3 === 0 || i % 5 === 0){
            list.push(i)
        }
        i++;
    }
    console.log(list.reduce((a, b)=>{
        return a + b;
    }));
}

mult(-1000);