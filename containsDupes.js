

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var container = {};
    var i = 0;
    result = false;
    for (var i; i<= nums.length ; i++){
    	if(container[nums[i]] !== undefined){
    		result = true;
    		break;
    	} else {
    		container[nums[i]] = true;
    	}
    }
    return result;
};