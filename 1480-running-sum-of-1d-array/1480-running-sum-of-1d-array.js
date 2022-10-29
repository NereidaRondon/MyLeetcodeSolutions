/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arr=[];
    let runningSum = 0;
    for(let i=0; i<nums.length; i++){
        runningSum= runningSum+ nums[i];
        arr.push(runningSum);
    }
    return arr;
};