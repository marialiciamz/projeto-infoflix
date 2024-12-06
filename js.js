function mudarUsuario(){
   if(conta.img == "indexUsuario1.html"){
    conta.img = "indexUsuario2.html";
   }else if(conta.img == "indexUsuario2.html"){
    conta.img = "indexUsuario1.html";
   }
}
function telaUsuario(){
    if(usuario.style.display == "none"){
        usuario.style.display = "block"
    }else if(usuario.style.display = "block"){
        usuario.style.display = "none"
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
 



 
 

