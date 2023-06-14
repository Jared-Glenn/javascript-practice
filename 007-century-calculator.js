function main() {
    var year = parseInt(readLine(), 10)
    
    //the output
    console.log(calcCent(year));
    
}

//complete the function
function calcCent(year){
    let cent = Math.ceil(year/100);
    return cent;
}
