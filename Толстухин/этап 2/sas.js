function createHeader() {
const header = document.createElement("header");
header.innerHTML = "<h1>ПРИВЕТСТВУЮ, НОВЫЕ ПОДАННЫЕ</h1>";
document.body.appendChild(header);
}
function createMain() {
    const main = document.createElement('main');
    main.appendChild(createImgBlock("КОВРОВЫЙ ДЖО","https://i.pinimg.com/736x/16/28/25/162825f101065a09af5688052499195f.jpg"));
    main.appendChild(createImgBlock("БЕЛУГА - РЫБА", "https://i.pinimg.com/originals/85/32/aa/8532aa32ef83bbb7c10868738d6309f6.jpg"));
    main.appendChild(createForm());
    document.body.appendChild(main);
}
function createImgBlock(text, imgSrc) {
    const block = document.createElement('div');
    block.className = 'img-block';
    block.innerHTML = `
        <p>${text}</p>
        <img class='image' src='${imgSrc}' alt='Пример'>
    `;
    return block;
}
function createForm() {
    const formContainer = document.createElement('div');
    formContainer.className = 'form-container';
    formContainer.innerHTML = `
        <h3>Оставьте все имущество здесь</h3>
        <input type="text" placeholder="Ваше имя" required>
        <input type="email" placeholder="Ваш email" required>
        <button type="submit">Отправить деньги</button>
    `;
    return formContainer;
}
function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = '<p>Все права пренадлежат Альберту Вескеру и Артему</p>';
    document.body.appendChild(footer);
}


createHeader();
createMain();
createFooter();
