function timeMoments(num){
    switch (true) {
        case num < 1 :
            console.log('enter a positive value');
            break;
        case num === 1 :
            console.log(`1 minute`);
            break;
        case (num < 60 && num > 1):
            console.log(`${num} minutes`)
            break;
        case num > 60:
            let time;
            let hour = num / 60;
            let min = num % 60;
            hour < 2 ? time = `${Math.floor(hour)} hour, `: time = `${Math.floor(hour)} hours, `
            min < 2 ? time += `${min} minute` : time += `${min} minutes` 
            console.log(time);
            break;
                    
    }
}

timeMoments(133);