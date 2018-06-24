class CalculatorApp {

    private static firstNumber : HTMLInputElement;
    private static secondNumber : HTMLInputElement;
    private static operator : HTMLButtonElement;
    private static eqaulsButton : HTMLButtonElement;
    private static resultButton : HTMLButtonElement;
    private static plusButton : HTMLButtonElement;
    private static minusButton : HTMLButtonElement;
    private static divButton : HTMLButtonElement;
    private static mulButton : HTMLButtonElement;
    private static clearButton : HTMLButtonElement;

    constructor(){
        CalculatorApp.initialize();
        CalculatorApp.addEvents();
    }

    public static initialize(){
        CalculatorApp.firstNumber = document.querySelector('#firstNumber') as HTMLInputElement;
        CalculatorApp.secondNumber = document.querySelector('#secondNumber') as HTMLInputElement;
        CalculatorApp.operator = document.querySelector('#operator') as HTMLButtonElement;
        CalculatorApp.eqaulsButton = document.querySelector('#equals-button') as HTMLButtonElement;
        CalculatorApp.resultButton = document.querySelector('#result-button') as HTMLButtonElement;
        CalculatorApp.plusButton = document.querySelector('#plus-button') as HTMLButtonElement;
        CalculatorApp.minusButton = document.querySelector('#minus-button') as HTMLButtonElement;
        CalculatorApp.mulButton = document.querySelector('#multiply-button') as HTMLButtonElement;
        CalculatorApp.divButton = document.querySelector('#divide-button') as HTMLButtonElement;
        CalculatorApp.clearButton = document.querySelector('#clear-button') as HTMLButtonElement;
    }

    public  static addEvents(){
        CalculatorApp.eqaulsButton.addEventListener('click',CalculatorApp.fetchResults);
        CalculatorApp.plusButton.addEventListener('click',CalculatorApp.changeOperatorPlus);
        CalculatorApp.minusButton.addEventListener('click',CalculatorApp.changeOperatorMinus);
        CalculatorApp.mulButton.addEventListener('click',CalculatorApp.changeOperatorMultiply);
        CalculatorApp.divButton.addEventListener('click',CalculatorApp.changeOperatorDivide);
        CalculatorApp.clearButton.addEventListener('click',CalculatorApp.clearAll);
    }

    public static fetchResults(){

        if(CalculatorApp.firstNumber.value.length === 0 ||
            CalculatorApp.secondNumber.value.length === 0  ){
            CalculatorApp.resultButton.innerHTML = 'Result';
        }
        else{
            let num1 = parseFloat(CalculatorApp.firstNumber.value);
            let num2 = parseFloat(CalculatorApp.secondNumber.value);
            let opr = CalculatorApp.operator.innerHTML.trim();
            let result:number = 0;

            switch(opr){
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

    }
    public static changeOperatorPlus(){
        CalculatorApp.operator.innerHTML = '+';
    }
    public static changeOperatorMinus(){
        CalculatorApp.operator.innerHTML = '-';
    }
    public static changeOperatorDivide(){
        CalculatorApp.operator.innerHTML = '/';
    }
    public static changeOperatorMultiply(){
        CalculatorApp.operator.innerHTML = '*';
    }
    public static clearAll(){
        CalculatorApp.firstNumber.value = "";
        CalculatorApp.secondNumber.value = "";
        CalculatorApp.operator.innerHTML = '+';
        CalculatorApp.resultButton.innerHTML = 'Result'
    }
}

let calcultor = new CalculatorApp();