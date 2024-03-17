function ClicarS() {
    window.location = 'aceitou.html'
}
/*
function ClicarN() {
    let btn = document.getElementById('btnao')
    btn.style.position = 'relative'
    btn.style.bottom = geraPosiçao(10, 90)
    btn.style.left = geraPosiçao(10, 90)
}
function geraPosiçao(min, max) {
    return (Math.random() + (max -min) + min) + "%"
}
*/

function ClicarN() {
    var botaoNao = document.getElementById('btnao')

    var larguraJanela = window.innerWidth
    var alturaJanela = window.innerHeight

    var maxX = larguraJanela - botaoNao.offsetWidth
    var maxY = alturaJanela - botaoNao.offsetHeight

    var aleatorioX = Math.floor(Math.random() * maxX)
    var aleatorioY = Math.floor(Math.random() * maxY)

    
    botaoNao.style.left = aleatorioX + "px"
    botaoNao.style.top = aleatorioY + "px"
}