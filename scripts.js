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
    let textobotao = document.querySelector(".textobotao");

    botao.classList.add("fecharpedido");
    textobotao.classList.add("bold")
    textobotao.innerHTML = "Fechar pedido"; 
  }
}


/* TELA DE CONFIRMACAO */

function confirmandopedido(){
  let confirmacao = document.querySelector('.confirmacao')

  let confirmacomida = document.querySelector('.menucomida .selecao');
  let confirmabebida = document.querySelector('.menubebida .selecao');
  let confirmasobremesa = document.querySelector('.menusobremesa .selecao');

  let nomeconfirmandocomida = document.querySelector('.confirmandocomida .confirmacaonome')
  let preconfirmandocomida = document.querySelector('.confirmandocomida .confirmacaopreco')

  let confirmacaonomebebida = document.querySelector('.confirmandobebida .confirmacaonome')
  let confirmacaoprecoDrink = document.querySelector('.confirmandobebida .confirmacaopreco')

  let confirmacaonomeDessert = document.querySelector('.confirmandosobremesa .confirmacaonome')
  let confirmacaoprecoDessert = document.querySelector('.confirmandosobremesa .confirmacaopreco')

  const totalpreco = document.querySelector('.totalpreco')

  if(confirmacomida && confirmabebida && confirmasobremesa){
      confirmacao.classList.add('telaverde')
      const nomecomidadiv = confirmacomida.querySelector('.nome')
      const nomebebidadiv = confirmabebida.querySelector('.nome')
      const nomesobremesadiv = confirmasobremesa.querySelector('.nome')

      const valorcomidaDiv = confirmacomida.querySelector('.precoitem')
      const valorbebidaDiv = confirmabebida.querySelector('.precoitem')
      const valuesobremesaDiv = confirmasobremesa.querySelector('.precoitem')

      const nomecomida = nomecomidadiv.innerText
      const nomebebida = nomebebidadiv.innerText
      const nomesobremesa = nomesobremesadiv.innerText

      const valorcomidatexto = valorcomidaDiv.innerText
      const valorbebidatexto = valorbebidaDiv.innerText
      const valorsobremesatexto =  valuesobremesaDiv.innerText

      const valorcomidafixed = parseFloat(valorcomidatexto).toFixed(2)
      const valorbebidafixed = parseFloat(valorbebidatexto).toFixed(2)
      const valuesobremesafixed = parseFloat(valorsobremesatexto).toFixed(2)

      const valorcomida = parseFloat(valorcomidatexto)
      const valorbebida = parseFloat(valorbebidatexto)
      const valuesobremesa = parseFloat(valorsobremesatexto)

      let soma = valorcomida + valorbebida + valuesobremesa

      nomeconfirmandocomida.innerHTML = nomecomida;
      preconfirmandocomida.innerHTML = valorcomidafixed;

      confirmacaonomebebida.innerHTML = nomebebida;
      confirmacaoprecoDrink.innerHTML = valorbebidafixed;

      confirmacaonomeDessert.innerHTML =nomesobremesa;
      confirmacaoprecoDessert.innerHTML = valuesobremesafixed;

      totalpreco.innerHTML = soma.toFixed(2);
  }
}

function cancelarconfirmacao(){
  let confirmacao = document.querySelector('.confirmacao')
  confirmacao.classList.remove('telaverde')
}

// LINK DO WHATSAPP


function linkwhats(){

  let confirmacomida = document.querySelector('.menucomida .selecao');
  let confirmabebida = document.querySelector('.menubebida .selecao');
  let confirmasobremesa = document.querySelector('.menusobremesa .selecao');

  if(confirmacomida && confirmabebida && confirmasobremesa){
      
      const nomecomidadiv = confirmacomida.querySelector('.nome')
      const nomebebidadiv = confirmabebida.querySelector('.nome')
      const nomesobremesadiv = confirmasobremesa.querySelector('.nome')

      const valorcomidaDiv = confirmacomida.querySelector('.precoitem')
      const valorbebidaDiv = confirmabebida.querySelector('.precoitem')
      const valuesobremesaDiv = confirmasobremesa.querySelector('.precoitem')

      const nomecomida = nomecomidadiv.innerText
      const nomebebida = nomebebidadiv.innerText
      const nomesobremesa = nomesobremesadiv.innerText

      const valorcomidatexto = valorcomidaDiv.innerText
      const valorbebidatexto = valorbebidaDiv.innerText
      const valorsobremesatexto =  valuesobremesaDiv.innerText

      const valorcomida = parseFloat(valorcomidatexto)
      const valorbebida = parseFloat(valorbebidatexto)
      const valuesobremesa = parseFloat(valorsobremesatexto)

      const valortotal = valorcomida + valorbebida + valuesobremesa
      
      const nome = prompt('Digite seu nome: ')
      const endereço = prompt('Digite seu endereço: ')


      let textodecompra = `
      Olá, gostaria de fazer o pedido:
      - Prato: ${nomecomida}
      - Bebida: ${nomebebida}
      - Sobremesa: ${nomesobremesa}
      Total: R$ ${valortotal.toFixed(2)}
      Nome: ${nome}
      Endereço: ${endereço}
      `
      
      const link = textodecompra;
      const encodedlink = encodeURIComponent(link, "_blank");
      const allLink = "https://wa.me/5547997084660?text=" + `${encodedlink}`

      openLink(allLink)
  }

}

function openLink (element) {window.open(element);}
