function simpleCalculator(){

    let numOne;
    let numTwo;
    let result;

    return {
        init: (selector1, selector2, resultSelector) => {
            numOne = document.querySelector(selector1);
            numTwo = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },
        add: () => {
            result.value = Number(numOne.value) + Number(numTwo.value)
        },
        subtract: () => {
            result.value = Number(numOne.value) - Number(numTwo.value)
        }
    }
}

let obj = simpleCalculator();
obj.init("#num1","#num2","#result" );

let add = obj.add;
let subtract = obj.subtract;
document.querySelector("button").addEventListener('click', add)