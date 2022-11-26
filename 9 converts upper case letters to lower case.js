//JavaScript: Input a str and converts upper case letters to lower and vice versa
// Input:aAbBcCdDeE
// Output:AaBbCcDdEe

//charCodeAt():method returns the unicode of the character at a given position in a string.

var str = "aAbBcCdDeE";
function convertOpposite(str) {
  var ln = str.length;
  for (var i = 0; i < ln; i++) {
    if (str[i] >= "a" && str[i] <= "z")
      console.log(String.fromCharCode(str.charCodeAt(i) - 32));
    else if (str[i] >= "A" && str[i] <= "Z")
      console.log(String.fromCharCode(str.charCodeAt(i) + 32));
  }
}

convertOpposite(str);
