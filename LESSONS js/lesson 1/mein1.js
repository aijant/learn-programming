var transport = 'мопед';

function check_ternar(a, b){
    return a < b? a + " less than " + b : a + " greater than " + b;
};

function check_condition(a, b){
    let result = "";
    if (a < b){ 
        result = a + " less than " + b;
    }
    else {
        result = a + " greater than " + b;
    }
    return result;
};


let name = check_ternar(3, 2);
console.log(name)
console.log(check_condition(3,2))
console.log('пешком идти долековата!');
console.log('мопед');
console.log(1 < 2?"True":"False");


//var transport = 'автомобиль';
//(transport ==='автомобиль'
transport' === 'велосипед'  ) ? alert('Вы добрались до дома!');
//alert('пешком идти долековата!');||