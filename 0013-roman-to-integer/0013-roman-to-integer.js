/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    let sum=0;
    let letters = s.split('');
    let nums=[];
    
    for(let i=0;i < letters.length;i++){
        switch(letters[i]){
            case 'I': nums.push(1); 
            break;
            case 'V': nums.push(5); 
            break;
            case 'X': nums.push(10); 
            break;
            case 'L': nums.push(50); 
            break;
            case 'C': nums.push(100); 
            break;
            case 'D': nums.push(500); 
            break;
            case 'M': nums.push(1000);                     
        };    
    }; 
    for(let i=0;i < nums.length;i++){
        
        if(nums[i] < nums[i+1]){
            sum-=nums[i];
        }else{
            sum+=nums[i];
        };  
    };
    return sum;

};