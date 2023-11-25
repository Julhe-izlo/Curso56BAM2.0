function contacto(){
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    ul.innerHTML += li;
    name.value = "";
    email.value = "";
    message.value = "";
}

function eliminarDatos(event){
    if (event.target.tagName === "LI"){
        event.target.remove();
    }
}