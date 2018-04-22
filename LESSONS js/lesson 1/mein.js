var obj = {
    big: 'str',
    func: function () {
        console.log("show properties by func", this.big);
    }
};
console.log("type of ->", typeof obj.big);
console.log("get properties by dot ->", obj.big);
console.log("get properties by braces ->", obj["big"]);
obj.func();

// print name if obj does'nt have properties.
console.log(obj.fff || "name");

obj.dog = 'Gag 9';
obj.big = 'askat';

console.log(obj);

//---

var a = { prop: 1 }, b = { prop: 2 }, c = { prop: 3 };

console.log(a, b, c);

a = b = c = { prop: 'allTheSame' }
console.log(a, b, c);

var y = obj;
console.log(y.big );

delete obj.func;
console.log(obj );