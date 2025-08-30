function createPhoneNumber(numbers){
 	if(numbers.length > 10){
		return "error";
};
	const primeiros3 = numbers.slice(0, 3).join('');
	const segundos3 = numbers.slice(3, 6).join('');
	const ultimos4 = numbers.slice(-4).join('')
	return (`(${primeiros3}) ${segundos3}-${ultimos4}`);
}