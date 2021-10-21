function check_code(cupom){
    var valid_codes = ['12345', '45321', '12457', '09912'];
    var flag = false;
    valid_codes.forEach(code => {
        if (code == cupom){
            flag = true;
        }
    });

    return flag;
}


var button_cupom = document.querySelector("#aplicar-cupom-c");
button_cupom.addEventListener("click", function(event){
    var cupom = document.querySelector("#form-cartao");
    cupom = cupom.cupom_bol.value;

    cupom_valido = check_code(cupom);

    if(cupom_valido){
        /*
        Aqui tbm tem de chamar o back pra saber de quanto é o desconto do código.
         */
        var valor_final = document.querySelector("#val-final-c");
        valor_final.value = valor_final.value * 0.5;
    }
});

var button_boleto = document.querySelector("#concluir-compra-cartao");
button_boleto.addEventListener("click", function(event){
    var form_cartao = document.querySelector("#form-cartao");
    var num_cartao = form_cartao.num_cartao.value;
    var username = form_cartao.username_c.value;
    var num_parcelas = form_cartao.num_parcelas.value;
    var valor = document.querySelector("#val-final-c");
    valor = valor.value;

    /*A partir daqui seria tipo, inserção no banco de dados, acho */
});