//Title caps

var titleCaps = ((str) => {
    console.log("Given array:");
    console.log(str);
 for(let i=0; i<str.length; i++){
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
 }
 return str;
})(["make", "the", "sentence", "title", "caps"]);
console.log("Title caps result:");
console.log(titleCaps);