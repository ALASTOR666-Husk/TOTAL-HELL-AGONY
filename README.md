# TOTAL HELL AGONY ALL THIS HERE

    !14 тема: DocumentObjectModel:

<body id ="body">
1)  document.body.style.background = "green" -- cделать фон нужного цвета
//  document.body.style.color = "purple"

const body = document.querySelector("body")
2)  document.getElementById("body") // (поиск элемента по id)

document.getElementById("body").style.background = "red" // (поиск элемента по id и смена цвета)

3)  document.querySelector("body") // поиск первого body внутри html
    document.querySelector("#body") // поиск первого body по id внутри html
    document.querySelector(".body") // поиск первого body по class внутри html

3.5)const firstDiv = document.querySelector("div:nth-child(2)")
        firstDiv.textContent = "hello, your license expired"

4)  body.innerHTML = "Hello, dawg" // возвращает контент (HTML-разметка и текстовый контент)
"<h1>Hello, dawg</h1>" // ТАК НЕБЕЗОПАСНО! (XXS-уязвимости)

5)  body.textContent = "Hello, World!" // Метод безопаснее
    body.innerText // Устаревший

// Создание обработчика событий click
6) const clicker = () => {
const div = document.querySelector("div")
div.textContent = "Hello, World!"
}

(in .html:)
<button onclick="clicker()">
        click me, lol
    </button>

7) document.querySelector("button").addEventListener("click", clicker) // Вешает обработчик события на элемент
example:
    const clicker = () => {
    const div = document.querySelector("div")
    div.textContent = "Hello, World!"
}
document.querySelector("button").addEventListener("click", clicker)

8)setAttribute("тип аттрибута", "название") // вставка тип аттрибута/добавление аттрибута к элементу

9)removeAtrribute("тип аттрибута") // удаление аттрибута элемента

    // Работа с атрибутами class элементов:
10) "элемент".classlist.add/remove/toggle("название")
    // toggle -- добавляет класс элементу если отсуствует, и удаляет если присутствует.

const clicker = () => {
const firstDiv = document.querySelector("div")
firstDiv.classList.toggle("black")
}
.white {
    background-color: white;
    height: 80px;
    color: black;
}
 
.black {
    background-color: rgb(0, 0, 0);
    height: 80px;
    color: rgb(255, 255, 255);
}
<button onclick="clicker()">CLICK</button>

11) createElement("div") // "что создать?"
parent.before/prepend/append/after(новый элемент) // "куда создать?"

    const firstDiv = document.querySelector("div")
    const firstOutP = document.createElement("p")
    firstOutP.textContent = "I'm the zero"
    firstDiv.before(firstOutP)

    const firstP = document.createElement("p")
    firstP.textContent = "I'm the first"
    firstDiv.prepend(firstP)

    const secondP = document.createElement("p")
    secondP.textContent = "I'm the second"
    firstDiv.append(secondP)

    const thirdP = document.createElement("p")
    thirdP.textContent = "I'm the third"
    firstDiv.append(thirdP)

    const lastOutP = document.createElement("p")
    lastOutP.textContent = "I'm the last outside"
    firstDiv.after(lastOutP)

12) removeChild("дочерний элемент") // удаление элемента внутри родительского


13) querySelectorAll("div")

        const Divs = document.querySelectorAll("div")
        Divs.forEach(Element => {
            Element.classlist.add("Divs")
            Element.textContent = "bruh"
            console.log(Element.textContent)
        })
