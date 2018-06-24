var CalculatorApp = (function () {
    function CalculatorApp() {
        CalculatorApp.initialize();
        CalculatorApp.addEvents();
    }
    CalculatorApp.initialize = function () {
        CalculatorApp.firstNumber = document.querySelector('#firstNumber');
        CalculatorApp.secondNumber = document.querySelector('#secondNumber');
        CalculatorApp.operator = document.querySelector('#operator');
        CalculatorApp.eqaulsButton = document.querySelector('#equals-button');
        CalculatorApp.resultButton = document.querySelector('#result-button');
        CalculatorApp.plusButton = document.querySelector('#plus-button');
        CalculatorApp.minusButton = document.querySelector('#minus-button');
        CalculatorApp.mulButton = document.querySelector('#multiply-button');
        CalculatorApp.divButton = document.querySelector('#divide-button');
        CalculatorApp.clearButton = document.querySelector('#clear-button');
    };
    CalculatorApp.addEvents = function () {
        CalculatorApp.eqaulsButton.addEventListener('click', CalculatorApp.fetchResults);
        CalculatorApp.plusButton.addEventListener('click', CalculatorApp.changeOperatorPlus);
        CalculatorApp.minusButton.addEventListener('click', CalculatorApp.changeOperatorMinus);
        CalculatorApp.mulButton.addEventListener('click', CalculatorApp.changeOperatorMultiply);
        CalculatorApp.divButton.addEventListener('click', CalculatorApp.changeOperatorDivide);
        CalculatorApp.clearButton.addEventListener('click', CalculatorApp.clearAll);
    };
    CalculatorApp.fetchResults = function () {
        if (CalculatorApp.firstNumber.value.length === 0 ||
            CalculatorApp.secondNumber.value.length === 0) {
            CalculatorApp.resultButton.innerHTML = 'Result';
        }
        else {
            var num1 = parseFloat(CalculatorApp.firstNumber.value);
            var num2 = parseFloat(CalculatorApp.secondNumber.value);
            var opr = CalculatorApp.operator.innerHTML.trim();
            var result = 0;
            switch (opr) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                default:
                    result = 0;
                    break;
            }
            CalculatorApp.resultButton.innerHTML = result + "";
        }
    };
    CalculatorApp.changeOperatorPlus = function () {
        CalculatorApp.operator.innerHTML = '+';
    };
    CalculatorApp.changeOperatorMinus = function () {
        CalculatorApp.operator.innerHTML = '-';
    };
    CalculatorApp.changeOperatorDivide = function () {
        CalculatorApp.operator.innerHTML = '/';
    };
    CalculatorApp.changeOperatorMultiply = function () {
        CalculatorApp.operator.innerHTML = '*';
    };
    CalculatorApp.clearAll = function () {
        CalculatorApp.firstNumber.value = "";
        CalculatorApp.secondNumber.value = "";
        CalculatorApp.operator.innerHTML = '+';
        CalculatorApp.resultButton.innerHTML = 'Result';
    };
    return CalculatorApp;
}());
var calcultor = new CalculatorApp();
