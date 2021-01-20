//Median of two sorted arrays

((arr) => {
    console.log("Given array: "+arr.join(" "));
    let map = {};
    for(let i=0; i<arr.length; i++){
        if(!map[arr[i]]){
            map[arr[i]] = 1;
        }else{
            map[arr[i]]++;
        }
    }
    
    for(let i=arr.length-1; i>=0; i--){
        if(map[arr[i]] > 1){
            map[arr[i]]--;
            arr.splice(i,1);
        }    
    }
    
    console.log("Array after removing duplicates: " +arr.join(" "));
    
})([1, 2, 5, 2, 1, 7, 9, 8, 1, 4]);
