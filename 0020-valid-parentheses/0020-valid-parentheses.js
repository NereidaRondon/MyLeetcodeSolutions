/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (bracketMap[char]) {
            let topElement;
            if (stack.length > 0) {
                topElement = stack.pop();
            } else {
                topElement = '#';
            }
            if (bracketMap[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};