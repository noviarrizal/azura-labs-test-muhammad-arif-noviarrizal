function kalkulator(num1, operator, num2) {
	if (num1 > 1000000 && num2 > 1000000) {
		return "Angka tidak boleh lebih dari 1 juta";
	}
	if (!["+", "-", "*", "/"].includes(operator)) {
		return "Invalid Operator";
	}

	if (operator == "+") {
		return parseInt(num1) + parseInt(num2);
	} else if (operator == "-") {
		return parseInt(num1) - parseInt(num2);
	} else if (operator == "*") {
		return parseInt(num1) * parseInt(num2);
	} else {
		return parseInt(num1) / parseInt(num2);
	}
}

console.log(kalkulator("1000001", "+", "1000001"));
console.log(kalkulator("200", "+", "300"));
console.log(kalkulator("13", "+", "187"));
console.log(kalkulator("134", "-", "11"));
console.log(kalkulator("8", "*", "7"));
console.log(kalkulator("16", "/", "4"));
