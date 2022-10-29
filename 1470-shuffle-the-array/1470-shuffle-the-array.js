/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let newNums=[];
    nums.map(el=>newNums.push(el));
   
    nums.splice(n, n);
    newNums.splice(0,n);
    
    let newOrder=[];
    for(let i=0;i<n;i++){
	newOrder.push(nums[i], newNums[i]);
};
    return newOrder;
};