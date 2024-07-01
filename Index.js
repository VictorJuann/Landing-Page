var setaesquerda = window.document.getElementById("setaesquerda")
var setadireita = window.document.getElementById("setadireita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")

function RolarParaDireita() {
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
    setaesquerda.style ="display:flex; margin-top:65px"
    setadireita.style ="display:none"
}

function RolarParaEsquerda() {
    Leonardo.style ="display:flex"
    Bruna.style ="display:none"
    setaesquerda.style ="display:none"
    setadireita.style ="display:flex"
}