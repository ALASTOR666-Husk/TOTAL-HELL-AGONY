# TOTAL HELL AGONY ALL THIS HERE
2. BPMN строим в 
https://online.visual-paradigm.com/app/diagrams/#diagram:proj=0&type=BusinessProcessDiagram&width=11&height=8.5&unit=inch
VP Online - Online Drawing Tool
VP Online is your all-in-one online drawing solution. Create professional flowcharts, UML diagrams, BPMN, ArchiMate, ER Diagrams, DFD, SWOT, Venn, org charts and mind map. Works cross-platforms: Ma... 



 2. BPMN
https://practicum.yandex.ru/blog/notaciya-bpmn-dlya-biznes-processov/
Нотация BPMN 2.0: элементы, преимущества - построение модели бизнес-процессов, примеры
Описание нотации BPMN 2.0, её ключевых элементов, преимуществ использования, примеры диаграмм. Расскажем, как построить модели бизнес-процесса с помощью BPMN и как можно применять данные в бизнес-а...


 https://app.diagrams.net/

Пример: Смоделировать бизнес-процесс "Процесс поступления в колледж студентов". Абитуриент, Приемная комиссия, Директор. 

Пример: (составить алгоритм расчета скидок для клиентов. Если сумма выкупа у клиента более 100 000 - то скидка 5%,
если сумма выкупа у клиента более 200 000 - то скидка 10%, если сумма выкупа у клиента более 300 000 - то скидка 30%)



<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Бурда</title>
</head>
<body>
    <div>
        <h1>Вроде это калькулятор</h1>
        <input type="number" id="num1" placeholder="Введите первое число">
        <input type="number" id="num2" placeholder="Введите второе число">
        <div>
            <button data-op="+">+</button>
            <button data-op="-">-</button>
            <button data-op="*">*</button>
            <button data-op="/">/</button>
            <button data-op="%">%</button>
            <button data-op="**">**</button>
        </div>
        <div id="result">TAKE THAT!!!: </div>
    </div>

    <script src="./WORK.js"></script>
</body>
</html>


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
