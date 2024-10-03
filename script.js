function institucional() {
    var navegacao = document.getElementById("itens1")

    var menu1 = document.createElement('div')
    menu1.setAttribute('id', 'menu1')
    itens1.appendChild(menu1)


    //Excluindo Itens
    menu1.addEventListener("mouseout", sair)
    function sair() {
        var menu1 = document.getElementById('menu1')
        menu1.parentNode.removeChild(menu1)
    }

    var header = document.getElementById("header")
    header.addEventListener("click", cancelar)

    function cancelar() {
        var menu1 = document.getElementById("menu1")
        menu1.parentNode.removeChild(menu1)
    }
}



function curiosidade() {
    var navegacao = document.getElementById("itens2")

    var menu2 = document.createElement('div')
    menu2.setAttribute('id', 'menu2')
    itens2.appendChild(menu2)


    //Excluindo Itens
    menu2.addEventListener("mouseout", sair)
    function sair() {
        var menu2 = document.getElementById('menu2')
        menu2.parentNode.removeChild(menu2)
    }

    var header = document.getElementById("header")
    header.addEventListener("click", cancelar)

    function cancelar() {
        var menu2 = document.getElementById("menu2")
        menu2.parentNode.removeChild(menu2)
    }
}

function turmas() {
    var navegacao = document.getElementById("itens3")

    var menu3 = document.createElement('div')
    menu3.setAttribute('id', 'menu3')
    itens3.appendChild(menu3)


    //Excluindo Itens
    menu3.addEventListener("mouseout", sair)
    function sair() {
        var menu3 = document.getElementById('menu3')
        menu3.parentNode.removeChild(menu3)
    }

    var header = document.getElementById("header")
    header.addEventListener("click", cancelar)

    function cancelar() {
        var menu3 = document.getElementById("menu3")
        menu3.parentNode.removeChild(menu3)
    }
}