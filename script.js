function curiosidade() {
    var navegacao = document.getElementById("itens2")

    var menu2 = document.createElement('div')
    menu2.setAttribute('id', 'menu2')
    itens2.appendChild(menu2)


    //Excluindo Itens
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
    
    var turmas = document.createElement('p')
    turmas.setAttribute('id', 'txtTurma')
    turmas.innerHTML = 'Turma de Aprendizagem de Serviços Administrativos'
    menu3.appendChild(turmas)
    
    var turmas = document.createElement('p')
    turmas.setAttribute('id', 'txtTurma2')
    turmas.innerHTML = 'Turma de Aprendizagem de Serviços Logísticos'
    menu3.appendChild(turmas)
    
    var turmas = document.createElement('p')
    turmas.setAttribute('id', 'txtTurma3')
    turmas.innerHTML = 'Turma de Aprendizagem de Atacado e Varejo'
    menu3.appendChild(turmas)
    
    itens3.appendChild(menu3)


    //Excluindo Itens
    var header = document.getElementById("header")
    header.addEventListener("click", cancelar)

    function cancelar() {
        var menu3 = document.getElementById("menu3")
        menu3.parentNode.removeChild(menu3)
    }
}
