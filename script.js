const users =  [ {

    id: 1,
    name: "Иванов",
    age: 20
},
{

    id: 2,
    name: "Петров",
    age: 25
},
{

    id: 3,
    name: "Сидоров",
    age: 30
},
]

// распарсить данные в таблицу в котторую подставятся значения  (заголовки ID name age ) и значения каджддого экземпляра

const tbody = document.getElementById("tbody")


users.forEach(user => {

    let tr = document.createElement("tr");

    for (let key in user) {

        let td = document.createElement("td")

        td.textContent = user[key]

        tr.append(td)
    }
    tbody.append(tr)
})

