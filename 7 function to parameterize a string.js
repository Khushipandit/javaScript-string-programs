// Write a JavaScript function to parameterize a string

// Input:"Robin Singh from USA.";
// output :"robin-singh-from-usa";

let str = "Robin Singh from USA.";
function func() {
  let a = str.toLowerCase();
  console.log(a);
  let b = a.split(" ");
  console.log(b);
  let c = b[0] + "-" + b[1] + "-" + b[2] + "-" + b[3].substr(0, 3);
  console.log(c);
}
func();

console.log("");
console.log("--------- 2nd Program Output-------");
console.log("");

// here replace method will replace only one elemt to replace all the element we need to use replaceAll
function funcA() {
  let b = str.trim().toLowerCase().replaceAll(" ", "-").replace(".", "");
  console.log(b);
}
func();
