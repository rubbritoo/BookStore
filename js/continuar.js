var continue_button = document.querySelector("#continuar-compra");
continue_button.addEventListener("click", function(event){
    event.preventDefault();
    console.log("TESTE");
    var form_selection = document.querySelector("#seletor");
    var div_cartao = document.querySelector("#div-cartao");
    var div_boleto = document.querySelector("#div-boleto");
    var selecao = form_selection.pag_type.value;


    if (selecao == "cartao"){
        var form_cartao = document.querySelector("#form-cartao");
        form_cartao.reset()
        div_cartao.classList.remove("hidden-stuff");
        div_cartao.classList.add("open-stuff");
        div_boleto.classList.remove("open-stuff");
        div_boleto.classList.add("hidden-stuff");
    }

    else if (selecao == "boleto"){
        var form_boleto = document.querySelector("#form-boleto");
        form_boleto.reset()
        div_cartao.classList.add("hidden-stuff");
        div_cartao.classList.remove("open-stuff");
        div_boleto.classList.add("open-stuff");
        div_boleto.classList.remove("hidden-stuff");
    }
});