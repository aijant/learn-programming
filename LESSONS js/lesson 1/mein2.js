function roughScale(x, base) {
var parsed = parseInt(x, base);
if (isNaN(parsed)) { return 0 }
 return parsed * 100;
 }
  
 console.log(roughScale(' 0xF', 16));
  expected output: 1500
  
  console.log(roughScale('321', 2));
   expected output: 0
 var str = '"String" is a date type';
    str2 = "\"String\" is a date type";
  console.log(str);
  console.log(str2);
  console.log(str2.length);
 longStr = "При помощи согласной n, \nесли слово заканчивается \tна гласную."
  console.log(longStr);
  console.log('Guten' + '\tMorgen');
  console.log(str.charAt(2));
  console.log(str.charCodeAt(2));
   console.log(str.substring(0,12));
console.log(str.slice(-10));
console.log(str.substr(5,13));
console.log(str.split( ));
console.log(str.replace('String', 'number'));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

