function squareDigits(num){
	const arrayNum = num.toString().split('').map(Number);
	const multNum = arrayNum.map(n => n * n);
	const resp = Number(multNum.join(''));
	return resp;
}

console.log(squareDigits(9119))