/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let newArr = n.toString().split("");

    let product=1;
    let sum =0;
    for(let i=0; i< newArr.length; i++){
        product= product * parseInt(newArr[i]);
        sum += parseInt(newArr[i]);
    }
    return product - sum;
};