function institucional() {
    var navegacao = document.getElementById('navegacao')
    
    var menu1 = document.createElement("section")
    menu1.setAttribute("id", "menu1")
    navegacao.appendChild(menu1)
    
    //Excluindo itens
    var menu2 = document.getElementById("menu2")
    var menu3 = document.getElementById("menu3")
    var menu4 = document.getElementById("menu4")
    menu2.parentNode.removeChild(menu4)
    menu2.parentNode.removeChild(menu2)
    menu3.parentNode.removeChild(menu3)
}

function curiosidade() {
    var navegacao = document.getElementById('navegacao')
    var menu1 = document.getElementById("menu1")
    var menu3 = document.getElementById("menu3")
    var menu4 = document.getElementById("menu4")

    var menu2 = document.createElement("section")
    menu2.setAttribute("id", "menu2")
    navegacao.appendChild(menu2)

    //Excluindo itens
    menu1.parentNode.removeChild(menu1)
    menu3.parentNode.removeChild(menu3)
    menu2.parentNode.removeChild(menu4)
}

function turmas() {
    var navegacao = document.getElementById('navegacao')
    var menu1 = document.getElementById("menu1")
    var menu2 = document.getElementById("menu2")
    var menu4 = document.getElementById("menu4")

    var menu3 = document.createElement("section")
    menu3.setAttribute("id", "menu3")
    navegacao.appendChild(menu3)

    //Excluindo itens
    menu1.parentNode.removeChild(menu1)
    menu2.parentNode.removeChild(menu2)
    menu2.parentNode.removeChild(menu4)
}

function roteiroDoProjeto() {
    var navegacao = document.getElementById('navegacao')
    var menu1 = document.getElementById("menu1")
    var menu2 = document.getElementById("menu2")
    var menu3 = document.getElementById("menu3")

    var menu4 = document.createElement("section")
    menu4.setAttribute("id", "menu4")
    navegacao.appendChild(menu4)

    //Excluindo itens
    menu1.parentNode.removeChild(menu1)
    menu2.parentNode.removeChild(menu2)
    menu2.parentNode.removeChild(menu3)
}