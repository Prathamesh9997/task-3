//Print odd numbers in an array

var oddNumbers = ((arr) => {
    let ans = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 !== 0){
            ans.push(arr[i]);
        }
    }
    return ans;
})([5,2,7,3,9,8,1]);

console.log("Odd numbers from an array: " +oddNumbers.join(" "));