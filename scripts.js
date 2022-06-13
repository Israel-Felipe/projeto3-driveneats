let selecaocomida;
let selecaobebida;
let selecaosobremesa; 

/* SELECÃO COMIDAS */
function selecionarcomida(elemento) {
  selecaocomida = elemento.innerHTML;
    const comidaok = document.querySelector(".menucomida .selecao");

    const check = document.querySelector(".menucomida .ativo");


  if (comidaok !== null) {
    comidaok.classList.remove("selecao");
  }
  elemento.classList.add("selecao");

  if (check !== null) {
    check.classList.remove("ativo"); 
  }
  elemento.querySelector(".icone").classList.add("ativo");

  liberarbotao()
}

/* SELEÇÃO BEBIDAS */
function selecionarbebida(elemento) {
  selecaobebida = elemento.innerHTML;
  const bebidaok = document.querySelector(".menubebida .selecao");
  const check = document.querySelector(".menubebida .ativo");

  if (bebidaok !== null) {
    bebidaok.classList.remove("selecao");
  }
  elemento.classList.add("selecao");

  if (check !== null) {
    check.classList.remove("ativo"); 
  }
  elemento.querySelector(".icone").classList.add("ativo");

  liberarbotao()
}

/* SELEÇÃO SOBREMESAS */
function selecionarsobremesa(elemento) {
  selecaosobremesa = elemento.innerHTML;
  const sobremesaok = document.querySelector(".menusobremesa .selecao");
  const check = document.querySelector(".menusobremesa   .ativo");

  if (sobremesaok !== null) {
    sobremesaok.classList.remove("selecao");
  }
  elemento.classList.add("selecao");

  if (check !== null) {
    check.classList.remove("ativo"); 
  }
  elemento.querySelector(".icone").classList.add("ativo");

  liberarbotao()
}


/* LIBERAR BOTÃO DE FECHAR O PEDIDO */
function liberarbotao() { 
  if (selecaocomida && selecaobebida && selecaosobremesa) {
    const botao = document.querySelector(".botao");
   
    botao.classList.add("fecharpedido");
    botao.innerHTML = "Fechar pedido";
  }
}
