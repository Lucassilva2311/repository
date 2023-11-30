var botao = document.getElementById("mostrar");

botao.addEventListener("click", function(){
    var usuario = document.querySelector(".usuario");

    if(usuario.style.display === "none") {
        usuario.style.display = "block";
    } else{
        usuario.style.display = "none";
    }

})