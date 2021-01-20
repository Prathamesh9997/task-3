//Sum of all numbers in an array

var sumOfElementsOfArray = ((arr) => {
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
})([5,2,7,3,9,8,1]);

console.log("Sum of all elements in an array: " +sumOfElementsOfArray);