//Rotate array by k positions

var rotate = ((arr,k) => {
    let leftRorate = [];
    let rightRotate = [];
    let len = arr.length;
    let newArr = arr;
    newArr = [... newArr, ...arr];
    
    if(k > len){
        k = k % len;
    }
    
    //Left rotatation
    for(let i=k; i<k+len; i++){
        leftRorate.push(newArr[i]);
    }
    
    //Right rotation
    for(let i=len-k; i<len-k+len; i++){
        rightRotate.push(newArr[i]);
    }
   
  console.log("Given array: " +arr.join(" "));  
  console.log("Left Rotation by " + k + " items: " +leftRorate.join(" "));
  console.log("Right Rotation by " + k + " items: " +rightRotate.join(" "));
  
})([3,2,4,1],3);