//Prime numbers

var primeNumbers = ((arr) => {
    let prime = [];
    for(let i=0; i<arr.length; i++){
       if(isPrime(arr[i])){
           prime.push(arr[i]);
       } 
    }
   return prime;
})([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
console.log("Prime numbers: " +primeNumbers);

function isPrime(a){
    let flag = true;
    if(a < 2){
        return false;
    }else if(a === 2){
        return true;
    }
    
    for(let i=2; i<a; i++){
        if(a % i === 0){
            flag = false;
            break;
        }   
    }
    return flag;
}
