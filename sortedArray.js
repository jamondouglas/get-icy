// sortedArray  given a number return start end end index or -1,-1 if not in array
//  searchRange([0,2,2,2,2,4,6,7],2) = {1,4}
// searchRange([1,2,3,4,5,5,6,9], 0) = {-1,-1}

// searchRange(1,[0,1,1,1,1,1,1,2,3,3,4,5])
const R = require('ramda');

let isGreaterThanLastElement = function(num, array){return num > array[array.length -1]? true:false}
let isLessThanFirstElement = function(num, array){return num < array[0]? true: false}

let returnLessThanMidpoint = function(array){
    	return Array.prototype.slice.call(array,0,getMiddleIndex(array));
}

let getMiddleIndex = function(array){
	return Math.floor(array.length/2);
}

let returnGreaterThanMidpoint = function(array){
	return Array.prototype.slice.call(array, (getMiddleIndex(array)+1));
}

// let greaterThan = function(num, array){ return num}
// let lessThan = function(num, array){}
let searchRange = function(array, num,endpoint,startpoint){
 	startpoint = (typeof startpoint !== 'undefined') ?  startpoint : undefined;
 	endpoint = (typeof endpoint !== 'undefined') ?  endpoint : undefined;

 	if(array.length === 0){
 		return  [-1,-1];
 	}

 	if((array.length === 1 && num === array[array.length-1]) && (startpoint === undefined && endpoint === undefined)){
 		return [0,0]
 	}
	if(isGreaterThanLastElement(num, array) || isLessThanFirstElement(num, array)){
		return [-1,-1]
	}
	let midpoint = getMiddleIndex(array);
	debugger;

	if(num === array[midpoint]){
			if ( array.length === 1){
				startpoint = typeof startpoint === 'undefined' ? endpoint : startpoint
				endpoint = typeof endpoint === 'undefined' ? startpoint : endpoint
			} else {
				startpoint = startpoint === undefined ? midpoint : startpoint
				endpoint = endpoint === undefined ? midpoint : endpoint
				while( num === array[endpoint +1]){
					endpoint += 1
				}

				while (num === array[startpoint - 1]){
					startpoint -= 1
				}
			}
		
	} else if(num < array[midpoint]){
		endpoint = (midpoint -1)
		return searchRange(returnLessThanMidpoint(array), num, endpoint,startpoint)
	} else if(num > array[midpoint]){
		startpoint = (midpoint+1);
		return searchRange(returnGreaterThanMidpoint(array),num,endpoint, startpoint);
	}
	// } else {
	// 	if(num === array[midpoint]){
	// 		startpoint = midpoint
	// 		endpoint = midpoint
	// 		while( num === array[endpoint +1]){
	// 			endpoint += 1
	// 		}

	// 		while (num === array[startpoint - 1]){
	// 			startpoint -= 1
	// 		}
	// 	}
	// }
	return [startpoint, endpoint]
}