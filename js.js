
//muda a cor do botão de envio se caso ele for clicado
function mudarCor1(){
    iEntrar.style.backgroundColor = "#300098";
}
//muda a cor do botão de envio se caso um input estiver selecionado
function mudarCor2(){
    iEntrar.style.backgroundColor = "#4C00F5";
}
//verifica se a senha e o email estão corretos, se não estiverem informa uma menssagem de erro
function loginSite(){
    if(iSenha.value == "Info_2022" && INome.value == "informaticaporamor@gmail.com"){
     return true;
    }else{
        alerta.style.display ="block";
        document.getElementById("form").reset();
        return false;
    }
 }




// adiciona um evento para mudar a cor de fundo do menu de acordo com a rolagem do scrull
window.addEventListener('scroll', function(){
    var elementoComMudanca = this.document.querySelector('menu');
    var scrollPosition = this.window.scrollY;

    if(scrollPosition>0){
        elementoComMudanca.classList.add('modoEscuro');
        elementoComMudanca.classList.remove('corPadrao')
    }else{
        elementoComMudanca.classList.add('corPadrao');
        elementoComMudanca.classList.remove('modoEscuro')
    }
});





 
 

