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


var button_cupom = document.querySelector("#aplicar-cupom-b");
button_cupom.addEventListener("click", function(event){
    var cupom = document.querySelector("#form-boleto");
    cupom = cupom.cupom_bol.value;

    cupom_valido = check_code(cupom);

    if(cupom_valido){
        /*
        Aqui tbm tem de chamar o back pra saber de quanto é o desconto do código.
         */
        var valor_final = document.querySelector("#val-final-b");
        valor_final.value = valor_final.value * 0.5;
    }
});

var button_boleto = document.querySelector("#concluir-compra-bol");
button_boleto.addEventListener("click", function(event){
    var form_bol = document.querySelector("#form-boleto");
    var cpf = form_bol.num_cpf.value;
    var username = form_bol.username_b.value;
    var valor = document.querySelector("#val-final-b");
    valor = valor.value;

    /*A partir daqui seria tipo, inserção no banco de dados, acho */
});