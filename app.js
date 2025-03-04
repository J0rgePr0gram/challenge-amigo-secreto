// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let resultado = document.getElementById("resultado")

function agregarAmigo() {
        
        let inputAmigo = document.getElementById("amigo"); 
        let amigo = inputAmigo.value.trim(); 
    
        console.log(amigo); 
    
        if(amigo === ""){
                alert("No has escrito a un amigo");
                return;
        }

        
        resultado.innerHTML = "";
        amigos.push(amigo);
        console.log(amigos);
        inputAmigo.value = "";
        inputAmigo.focus();
        actualizarLista();

}

function actualizarLista(){
        let listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.innerHTML = "";

        for(let i = 0; i < amigos.length; i++){
                let item = document.createElement("li");
                item.textContent = amigos[i]
                listaAmigos.appendChild(item)

        }
}
 function sortearAmigo(){
        if(amigos.length < 3){
                alert("Debes ingresar al menos 3 amigos")
                return;
        }
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.innerHTML = `Tu amigo secreto es ${amigoSorteado}`;

        let limpiarLista = document.getElementById("listaAmigos");
        limpiarLista.innerHTML = "";

        amigos = [];
        amigoSorteado.innerHTML = "";


 }