function sayHello(name, age) {
    console.log(name, "is", age, "years old.");
}

sayHello("aijan", 25);

const compare1 = (x, y) => {
    return x < y ? y : x;
};

function compare(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
};
console.log(compare1(2, 5));
console.log(compare(2, 5));

//function sum (){};

const sum = () => {
    let sum = 0;
    for (let i = 4; i < 8; i++) {
        if (i == 6) {
            continue;
        }
        sum += i;
    }
    return sum;
}

console.log(sum());

const count = () => {
    let counter = 0;
    do {
        counter++; //counter += 1; counter = counter + 1;
    }
    while (counter < 10);
    return counter;
}

console.log(count());

const count2 = () => {
    let pointer = 0;
    while (pointer < 10) {
        pointer = pointer + 1; // x++; x +=1;
    }
    return pointer;
}

console.log(count2());