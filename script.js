var inputAdultos = document.getElementById("adultos")
var inputCriancas = document.getElementById("criancas")
var inputDuracao= document.getElementById("duracao")
var resultado = document.getElementById("resultado")


function calcular(){
    console.log("teste ok")

    var adultos = inputAdultos.value;
    var criancas = inputCriancas.value;
    var duracao  = inputDuracao.value;

    var quantTotalCarne = (CarnePP(duracao) * adultos + (CarnePP(duracao) / 2) * criancas) / 1000;
    var quantTotalCerveja = (CervejaPP(duracao) * adultos) / 1000 ;
    var quantTotalBebidas = (BebidasPP(duracao) * adultos + (BebidasPP(duracao) / 2) * criancas) / 1000;


    resultado.innerHTML =`<p>Eaí bora?</p>`
    resultado.innerHTML += `<p>${quantTotalCarne}Kg de Carne</p>`
    resultado.innerHTML += `<p>${quantTotalCerveja}L de Cerveja</p>`
    resultado.innerHTML += `<p>${quantTotalBebidas}L de Bebidas</p>`

    resultado.style.background = "url(./img/FundoChurras.jpg)"
    resultado.style.border = "1px inset black";
    resultado.style.backgroundSize = "cover"
}

function CarnePP(duracao){
    if (duracao >=6){
        return 650;
    }
    else{
        return 400;
    }
}

function CervejaPP(duracao){
    if (duracao >=6){
        return 2000;
    }
    else{
        return 1200;
    }
}

function BebidasPP(duracao){
    if (duracao >=6){
        return 1500;
    }
    else{
        return 1000;
    }
}