// Write a JavaScript function to capitalize the first letter of a string
// Input:js string exercises
// Output:"Js string exercises"

let str = "js string exercises";
let a = str[0].toUpperCase();
console.log(a);
let b = a + str.slice(1);
console.log(b);

console.log("");
console.log("--------- 2nd Program Output-------");
console.log("");

// Input:"js string exercises";
// output:Js String Excercises

let ab = str.split(" ");
console.log(ab);

let cd = ab[0];
console.log(cd);
let sr = cd.charAt(0).toUpperCase();
console.log(sr);
let ta = sr + cd.slice(1);
console.log(ta);

let de = ab[1];
console.log(de);
let sa = de.charAt(0).toUpperCase();
console.log(sa);
let tb = sa + de.slice(1);
console.log(tb);

let ef = ab[2];
console.log(ef);
let sb = ef.charAt(0).toUpperCase();
console.log(sb);
console.log(sr);
let tc = sb + ef.slice(1);
console.log(tc);
str1 = ta + " " + tb + " " + tc;
console.log(str1);
