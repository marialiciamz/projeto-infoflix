function mudarUsuario(){
   if(conta.img == "indexUsuario1.html"){
    conta.img = "indexUsuario2.html";
   }else if(conta.img == "indexUsuario2.html"){
    conta.img = "indexUsuario1.html";
   }
}

function mudarCor1(){
    iEntrar.style.backgroundColor = "#300098";
}
function mudarCor2(){
    iEntrar.style.backgroundColor = "#4C00F5";
}

function loginSite(){
    if(iSenha.value == "Info_2022" && INome.value == "informaticaporamor@gmail.com"){
     return true;
    }else{
        alerta.style.display ="block";
        document.getElementById("form").reset();
        return false;
    }
 }


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




 
 

