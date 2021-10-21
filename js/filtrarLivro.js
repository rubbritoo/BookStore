var campoFiltro = document.querySelector("#InputFiltrar");

campoFiltro.addEventListener("input", function() {
    var livros = document.querySelectorAll(".livro");

    if (this.value.length > 0) {
        for (var i = 0; i < livros.length; i++) {
            var livro = livros[i];
            var lblTitulo = livro.querySelector(".info-titulo");
            var nome = lblTitulo.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                livro.classList.add("invisivel");
            } else {
                livro.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < livros.length; i++) {
            var livro = livros[i];
            livro.classList.remove("invisivel");
        }
    }
});
