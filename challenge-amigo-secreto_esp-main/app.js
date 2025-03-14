let listaDeamigos = [];
let lista = document.getElementById('listaAmigos');
let inputNombreIngresado = document.getElementById('amigo');
let resultado = document.getElementById('resultado');

function agregarAmigo() {
    let nombreAmigo = inputNombreIngresado.value.trim();  

    if (nombreAmigo === '') {
        alert('Ingrese nombre de su amigo.');
        return;
    }

    if (listaDeamigos.includes(nombreAmigo)) {
        alert('Amigo ya agregado.');
        return;
    }

    listaDeamigos.push(nombreAmigo);
    actualizarLista();
    inputNombreIngresado.value = ''; 
}

function actualizarLista() {
    lista.innerHTML = '';

    listaDeamigos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaDeamigos.length === 0) {
        alert('Agregue mínimo un nombre para sortear.');
        return;
    }

    console.log('Lista de amigos:', listaDeamigos);

    let randomIndex = Math.floor(Math.random() * listaDeamigos.length);
    let amigoSorteado = listaDeamigos[Math.floor(Math.random() * listaDeamigos.length)];
    console.log('Índice aleatorio:', randomIndex);
   
    resultado.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}

function limpiarLista() {
    listaDeamigos = [];
    actualizarLista();
    resultado.innerHTML = ''; 
}
