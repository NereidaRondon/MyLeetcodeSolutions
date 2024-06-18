/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let startIndex = 0;
    let currIndex = 0;
    let maxLength = 0;
    let charToIndex = {};

    while(currIndex < s.length) {
        const currChar = s.charAt(currIndex);
        if((currChar in charToIndex) && (charToIndex[currChar] >= startIndex)) {
            maxLength = Math.max(maxLength, currIndex - startIndex);
            startIndex = charToIndex[currChar] + 1;
        }
        charToIndex[s.charAt(currIndex)] = currIndex;
        currIndex++;
    }
    return Math.max(maxLength, currIndex - startIndex);
};