/**
 * @param {string} str
 * @return {number}
 	Input: "42"
	Output: 42

	Input: "   -42"
	Output: -42
	Explanation: The first non-whitespace character is '-', which is the minus sign.
             Then take as many numerical digits as possible, which gets 42.

    Input: "4193 with words"
	Output: 4193
	Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.

	Input: "words and 987"
	Output: 0
	Explanation: The first non-whitespace character is 'w', which is not a numerical 
             digit or a +/- sign. Therefore no valid conversion could be performed.

 	Input: "-91283472332"
	Output: -2147483648
	Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
             Thefore INT_MIN (−231) is returned.
 */
var myAtoi = function(str) {
	var result = 0;
    // trim the str value to get rid of whitespace
	var no_emptpy_char = str.trim();
    // ensure first char after white space is a +/- or digit regex
	var regex_rule =  /^(\+|\-|\d)/;
    if (regex_rule.exec(no_emptpy_char)){
		
    } else {
    	result = 0;
    }
    // if so then iterate through string until last digit and return integer
    return result;
};