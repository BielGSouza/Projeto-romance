function ClicarS() {
    window.location = 'aceitou.html'
}

function ClicarN() {
    let btn = document.getElementById('btnao')
    btn.style.position = 'relative'
    btn.style.bottom = geraPosiçao(10, 90)
    btn.style.left = geraPosiçao(10, 90)
}
function geraPosiçao(min, max) {
    return (Math.random() + (max -min) + min) + "%"
}
