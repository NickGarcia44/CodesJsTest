function call(left, rigth, call){
    const leftDistance = Math.abs(call - left);
    const rigthDistance = Math.abs(call - rigth);

    if (leftDistance < rigthDistance){
        return 'left'
    }else {
        return 'rigth'
    }
}

console.log(call(0,2,0))
console.log(call(0,2,2))
console.log(call(2,2,2))