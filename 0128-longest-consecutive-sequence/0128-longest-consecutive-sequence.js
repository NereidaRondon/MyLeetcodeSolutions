/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let nextNum = 0;
    let currNum = 0;
    let nextValue = 0;
    let counter = 1;
    let counterMax = 0;
  
    nums.sort(function(a, b){return a-b});

        for(let i = 0; i < nums.length; i++){
            currNum = nums[i];
            nextNum = nums[i+1];
            nextValue = currNum + 1;
        
        if(currNum !== nextNum){       
            if(nextValue === nextNum){
                counter += 1;
            
            } else {        
                counterMax = Math.max(counterMax, counter);
                counter = 1;

            }
        }
    }    
    return counterMax;
};