function timeMoments(num){
    let time = "";
    let hour = Math.floor(num / 60);
    console.log(hour);
    let min = num % 60;
    
    if (hour) (2 > hour > 0) ? time = `${Math.floor(hour)} hour, ` : time = `${Math.floor(hour)} hours, `;
    if (min) (2 > min > 0) ? time += `${Math.floor(min)} minute ` : time += `${Math.floor(min)} minutes`;
    console.log(time);

}

timeMoments(1);