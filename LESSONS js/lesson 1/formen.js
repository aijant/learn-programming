function func(a, b) {
    return a + b;

}
//console.log(func(5, 20))

var funcExp = function (a, b) {
    return a + b;
}
//console.log(funcExp(15, 30));

function func2(){
    var funcExample = function(){
        return'one';
    }


var variable =funcExampe();
var funcExampe=function(){
    return'two';
}
return variable;
};

//console.log(func1());
//console.log(func2());

var func = function (callback) {
    var name = "Nick";
    return callback(name);
};
//console.log(func(function(n) {
    return "Hello"  +  n
//}));

//var func1=function(){
//    return function(){
       // console.log('Guten Tag!!!');
//};
//};
//func1 ()();

/*var module = (function (pro)){
    console.log (pro);
    var prop2 = 2;
    console.log('Hi!!');
    }) (prop);*/
var funcArgs = function () {
    var i;
    sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    };
    return sum;
};

console.log(funcArgs(1, 2, 3, 567, 98))

