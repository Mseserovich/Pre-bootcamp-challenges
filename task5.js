function area(a, b, c){
    let semiP = 0.5 * (a + b + c);

    let area = Math.sqrt(semiP * ((semiP - a) * (semiP - b) * (semiP - c)));
    return area;
}

area(3, 4, 5);