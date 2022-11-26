//  Write a JavaScript function to convert a string in abbreviated form.

let str = "hello Portal";
function func() {
  var str1 = str.trim().split(" ");
  console.log(str1);
  if (str1.length > 1) {
    let a = str1[0] + " " + str1[1].charAt(0) + ".";
    console.log(a);
  }
}
func();
