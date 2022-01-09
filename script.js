const calculator = 
{
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: false,
}
function inputDigit(digit) {
    const {displayValue,waitingForSecondOperand } = calculator;
    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue=displayValue==='0' ? inputDigit :displayValue + inputDigit;
    }
    }
    function inputDecimal(dot) {
        
        if (calculator.waitingForSecondOperand === true) {
            calculator.displayValue = "0."
            calculator.waitingForSecondOperand = false;
        }else{
        if (calculator.displayValue.includes(dot)) 
            calculator.displayValue += dot;
        }
        }
    function handleOperator(nextOperator) {
        const {firstOperand,displayValue,operator} = calculator
        const inputValue = parseFloat(displayValue);
        if (operator && calculator.waitingForSecondOperand) {
            calculator.operator = nextOperator;
            return;
        }
        if (firstOperand == 0 && !isNaN (inputValue)) {
         calculator.firstOperand = inputValue;   
        } else if (operator) {
            const result = calculate(firstOperand,inputValue,operator);
            calculator.displayValue = `${parseFloat(result,toFixed(7))}`;
            calculator.firstOperand = result;
        }
        calculator.waitingForSecondOperand = true;
        calculator.operator = nextoperator;
    }
    function calculate(firstOperand, secondOperand, operator) {
        if (eperator === '+') {
            return firstOperand + secondOperand;
        } else if (operator === '-') {
            return firstOperand - secondOperand;
        } else if (operator === '*') {
            return firstOperand * secondOperand;
        } else if (operator === '/') {
            return firstOperand / secondOperand;
        }
        return secondOperand;
    }
    function resetcalculator() {
        calculator.displayValue = '0';
        calculator.firstOperand = 'null';
        calculator.waitingForSecondOperand = false;
        calculator.eperator = null;
    }
    function updatedispaly() {
        const display = document.querySelector('.calculator-screen');
        display.value = calculator.displayValue;
    }
    updatedispaly()
        const keys = document.querySelector('.calculator-keys');
        keys.addEventListener('click',Event => {
        const { target} = Event;
        const {value} = target;
        if (!target.matches('button')) {
            return;
    }
    switch (value) {
    case '+':
    case '-':
    case '*':
    case '/':
    case '=':
        handleOperator(value);
        break;
        case '.':
        inputDecimal(value);
        break;
        case 'all-clear':
        resetcalculator(value);
        break;
        default:
        output.innerHTML = value;
        if (Number.isInteger(parseFloat(value))) {
        }    
    }
    updatedispaly();
}); 