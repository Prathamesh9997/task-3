//Median of two sorted arrays

((arr1, arr2) => {
    let newArr = [...arr1, ...arr2];
    newArr.sort(function(a,b){
       return a-b; 
    });

   let x = newArr.length/2;
   let y = x - 1;
   let med = (newArr[y] + newArr[x]) / 2;
    console.log("Median of two sorted arrays: " +med);
    
})([1, 12, 15, 26, 38],[2, 13, 17, 30, 45]);
