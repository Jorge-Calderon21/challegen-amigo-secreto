// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Se declara el array para almacenar los nmbres de amigos
// Declarar un array para almacenar los nombres de los amigos
let listaAmigos = [];

// Array para almacenar los nombres que ya han sido sorteados
let nombresSorteados = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del input
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

        // Verificar si el campo no está vacío
    if (nombreAmigo !== '') {
        //No tener nombres duplicados
        if (!listaAmigos.includes(nombreAmigo)) {
                
            // Agregar el nombre al array
            listaAmigos.push(nombreAmigo);

            // Limpiar el campo de texto
            inputAmigo.value = '';

            actualizarListaAmigos();
        } else {
            alert('El nombre ya esta en la lista.');
            inputAmigo.value = '';
        }
    } else {
        alert('Ingresa un nombre válido.')
    }
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    // Obteniendo el elemento de la lista
    const listaAmigosElemento = document.getElementById('listaAmigos');

    // Limpiar ka lista existente
    listaAmigosElemento.innerHTML = '';

    // Iterar en el arreglo 
    for (let i = 0; i < listaAmigos.length; i++) {
        // Agregar un nuevo nombre a la lista 
        const li = document.createElement('li');
        // Agrega el nombre del amigo al contenido
        li.textContent = (i + 1) + ". " + listaAmigos[i]; 

        // Agregar el li a la lista
        listaAmigosElemento.appendChild(li);
    }
}

// Función para seleccionar el nombre aleatorio
function sortearAmigo() {
    // Validar que haya nombres disponibles para sortear
    if (listaAmigos.length === 0) {
        alert('No hay amigos en la lista. Agrega algunos nombres primero.');
        return;
    }

    // Verificar si todos los nombres ya han sido sorteados
    if (nombresSorteados.length === listaAmigos.length) {
        alert('Todos los nombres ya han sido sorteados. Reinicia el sorteo.');
        return;
    }

    // Obtener un nombre aleatorio que no haya sido sorteado
    let nombreSorteado;
    do {
        const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        nombreSorteado = listaAmigos[indiceAleatorio];
    } while (nombresSorteados.includes(nombreSorteado)); // Repetir si el nombre ya fue sorteado

    // Agregar el nombre sorteado al array de nombres sorteados
    nombresSorteados.push(nombreSorteado);

    // Mostrar el resultado en el HTML
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `El amigo sorteado es: <strong>${nombreSorteado}</strong>`;
}

