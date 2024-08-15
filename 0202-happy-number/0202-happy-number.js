/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    let seenNums = new Set();
    
    while(n !== 1 && !seenNums.has(n)){
        seenNums.add(n);
        let sum = 0;

        let numbers = n.toString().split("").map(Number);
        
        for(let i = 0; i < numbers.length; i++){
            
            sum += Math.pow(numbers[i], 2);
        }
        
        n = sum;
    }
        
    return n === 1;
    
};