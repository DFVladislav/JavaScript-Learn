function createHeader() {
    const header = document.createElement("header")
    header.innerHTML = "<h1>Добро пожаловать!</h1>"
    document.body.appendChild(header)
}

function createFooter() {
    const footer = document.createElement("footer")
    footer.innerHTML = "2026 Все права защищены"
    document.body.appendChild(footer)
}

function createImgBlock(text, imgSrc) {
    const block = document.createElement("div")
    block.className = "text-block";
    block.innerHTML = `<p>${text}<p>
    <img class = 'image' src = '${imgSrc}' alt = 'Пример'>`;
    return block;
}

function createForm() {
    const formContainer  = document.createElement("div")
    formContainer.className = "form-container"
    formContainer.innerHTML = `
    <h3>Оставьте заявку</h3>
    <form>
    <input type="text" placeholder = "Ваше имя" required>
    <input type = "email" placeholder = "Ваш email" required>
    <button type="sumbit"> Отправить</button>
    </form>
    `;
    return formContainer
}

function createMain() {
    const main = document.createElement("main")
    main.className = "container"
    main.appendChild(createImgBlock("Это кот 1,", "https://optim.tildacdn.com/tild3639-3964-4634-b239-393833386638/-/resize/824x/-/format/webp/54080808080.png.webp"))
    main.appendChild(createImgBlock("Это кот 2,", "https://img.goodfon.ru/wallpaper/big/7/3e/koshki-milye-kotiki.webp" ))
    main.appendChild(createForm());
    document.body.appendChild(main)
}

createHeader();
createMain();
createFooter();