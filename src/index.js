
exports.min = function min (array) {
	let arrayMin
	if(array && array.length > 0){
		arrayMin = array.sort(function(a, b) {
			return a - b;
		});
		return arrayMin[0]
	}
	return 0;
}

exports.max = function max (array) {
	let arrayMax
	if(array && array.length > 0){
		arrayMax = array.sort(function(a, b) {
			return b - a;
		});
		return arrayMax[0]
	}
	return 0;	
}

exports.avg = function avg (array) {	
	if(array && array.length > 0){
		let arrayAvg = array[0]
		for (let i = 0; i < array.length - 1; i++){
			arrayAvg += array[i + 1]
		}
		return arrayAvg / array.length
	}
	return 0;	
}
