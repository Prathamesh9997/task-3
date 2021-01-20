//Number palindrome

((arr) => {
    let pals = [];
   for(let i=0; i<arr.length; i++){
       if(isPalindrome(arr[i])){
           pals.push(arr[i]);
       }
   }
   console.log("Number palindromes: " +pals.join(" "));
  
})([101,151,255,507]);

function isPalindrome(n){
    let rev = 0;
    let rem,temp;
    temp = n;
    
    while(n>0){
        rem = n % 10;
        rev = rev * 10 + rem;
        n = parseInt(n / 10);
    }

    if(temp === rev){
        return true;
    }else{
        return false;
    }
}


//String palindrome

((arr) => {
    let pals = [];
   for(let i=0; i<arr.length; i++){
       if(isPalindrome(arr[i])){
           pals.push(arr[i]);
       }
   }
   console.log("String palindromes: " +pals.join(" "));
  
})(["REFER","PREFER","ABCBD","AABBAA"]);

function isPalindrome(str){
   let l = 0;
   let r = str.length-1;
   while(l<=r){
       if(str[l] !== str[r]){
           return false;
       }else{
           l++;
           r--;
       }
   }
   return true;
}
