const arr = [1, 2, 'str', {}];//litteral
//console.log(arr);

let arr2 = new Array(1, 2, 'str', {});
//console.log(arr2);

//console.log(arr[2]);

arr[4] = 'six';
//console.log(arr);
//console.log(arr.length);

//console.log("delete --------------------")
//delete arr[1];
//console.log(arr);

spliced = arr.splice(2, 2);

//console.log("after splice ->", arr);
//console.log("spliced array ->", spliced);

var matrix = [
    [1, 2, 3], // index 0
    [4, 5, 6], // index 1
    [7, 8, 9] // index 2
    //indexes    0, 1, 2
];
console.log(matrix[1][1]);
const printMatrix = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j])
        }
    }
}

//printMatrix(matrix);
a = [1, 2, 3, 4];
b = [5, 6, 7];
var newArr = a.concat(b);
//console.log(newArr);

//console.log(newArr.join(', '));

name = ["A", "i", "j", "a", "n"];

//console.log(name.join(""));

arr.push('new2')
//console.log((arr));

//console.log(arr.pop());
//console.log((arr));c

arr.unshift('up_new');
//console.log((arr));
//console.log(arr.shift());
//console.log((arr));


var reverseArr = arr.reverse();
//console.log((reverseArr));

var sliced = arr.slice(1, 3);
console.log((sliced));
console.log((arr));