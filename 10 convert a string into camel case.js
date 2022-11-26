// Write a JavaScript function to convert a string into camel case
// Input:Hi i am learning javascript
// Output:HiIAmLearningJavascript

let str1 = "Hi i am learning javascript";
strmod = str1.split(" ");
console.log(strmod);
strng =
  strmod[0] +
  strmod[1].charAt(0).toUpperCase() +
  strmod[1].slice(1) +
  strmod[2].charAt(0).toUpperCase() +
  strmod[2].slice(1) +
  strmod[3].charAt(0).toUpperCase() +
  strmod[3].slice(1) +
  strmod[4].charAt(0).toUpperCase() +
  strmod[4].slice(1);
console.log(strng);

// ---------OR-----------
console.log("");
console.log("--------- 2nd Program Output-------");
console.log("");

let name = "Hi i am learning javascript";
var n = name.length;
var str = " ";
for (i = 0; i < n; i++) {
  if (name[i] == " ") {
    str += name[i + 1].toUpperCase();
    i++;
  } else {
    str += name[i];
  }
}

console.log(str);
