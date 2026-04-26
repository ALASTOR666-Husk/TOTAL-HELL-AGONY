document.addEventListener('DOMContentLoaded', () => {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultDiv = document.getElementById('result');
    const buttons = document.querySelectorAll('button[data-op]');

    function calculate(operation) {
    const val1 = parseFloat(num1Input.value);
    const val2 = parseFloat(num2Input.value);
        if (isNaN(val1) || isNaN(val2)) {
            resultDiv.textContent = 'TAKE THAT!!!: Нужны числа, желательно 2';
            return;
        }
    let result;
        switch (operation) {
            case '+':
                result = val1 + val2;
                break;
            case '-':
                result = val1 - val2;
                break;
            case '*':
                result = val1 * val2;
                break;
            case '/':
                if (val2 === 0) {
                    resultDiv.textContent = 'НА НОЛЬ НЕ ДЕЛИМ!!!';
                    return;
                }
                result = val1 / val2;
                break;
            case '%':
                if (val2 === 0) {
                    resultDiv.textContent = 'НА НОЛЬ НЕ ДЕЛИМ!!!';
                    return;
                }
                result = val1 % val2;
                break;
            case '**':
                result = Math.pow(val1, val2);
                break;
            default:
                resultDiv.textContent = 'Не понятно';
                return;
        }
    const formattedResult = Number.isInteger(result) ? result : parseFloat(result.toFixed(8));
        resultDiv.textContent = `TAKE THAT!!!: ${formattedResult}`;
    }
    buttons.forEach(button => {
        button.addEventListener('click', () => {
    const operation = button.getAttribute('data-op');
            calculate(operation);
        });
    });
});