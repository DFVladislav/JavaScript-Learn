function applyStyles(element, styles) {
    Object.assign(element.style, styles)
}


function createHeader() {
    const header = document.createElement("header")
    header.innerHTML = "<h1>Добро пожаловать!</h1>"
    applyStyles(header, {
        background: "#333",
        color: "white",
        textAlign: "center",
        padding: "1rem",
        width: "100%"

    })
    document.body.appendChild(header)
}

function createFooter() {
    const footer = document.createElement("footer")
    footer.innerHTML = "2026 Все права защищены"
    applyStyles(footer, {
        textAlign: "center",
        padding: "1rem",
        background: "#333",
        color: "white",
        width: "100%",
        margin: "0 auto"
    });
    document.body.appendChild(footer)
}

function createImgBlock(text, imgSrc) {
    const block = document.createElement("div")
    applyStyles(block, {
        textAlign: "center",
        padding: "10px"
    })
    block.innerHTML = `<p>${text}<p>`
    const img = document.createElement("img")
    img.src = imgSrc
    img.alt = "Пример"
    applyStyles(img, {
        maxWidth: "100%",
        height: "auto",
        borderRadius: "8px"
    })
    block.appendChild(img)
    return block;
}

function createForm() {
    const formContainer = document.createElement("div")
    applyStyles(formContainer, {
        width: "100%",
        maxWidth: "400px",
        padding: "20px",
        background: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba (0, 0, 0, 0.1)",
        textAlign: "center"
    })
    formContainer.innerHTML = `
    <h3>Оставьте заявку</h3>
    <form>
    <input type="text" placeholder = "Ваше имя" required>
    <input type = "email" placeholder = "Ваш email" required>
    <button type="sumbit"> Отправить</button>
    </form>
    `;
    formContainer.querySelectorAll('input,button').forEach(el => {
        applyStyles(el, {
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "5px"
        })
    })
    applyStyles(formContainer.querySelector("button"),{
        backgroundColor: "#333",
        color: "white",
        cursor:"pointer"
    })
    return formContainer
}

function createMain() {
    const main = document.createElement("main")
    applyStyles(main, {
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px",
        background: "white",
        boxShadow: "0 0 10px rgba (0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px"
    })
    main.appendChild(createImgBlock("Это кот 1,", "https://optim.tildacdn.com/tild3639-3964-4634-b239-393833386638/-/resize/824x/-/format/webp/54080808080.png.webp"))
    main.appendChild(createImgBlock("Это кот 2,", "https://img.goodfon.ru/wallpaper/big/7/3e/koshki-milye-kotiki.webp"))
    main.appendChild(createForm());
    document.body.appendChild(main)
}


createHeader();
createMain();
createFooter();
