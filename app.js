// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Se declara el array para almacenar los nmbres de amigos
// Declarar un array para almacenar los nombres de los amigos
let listaAmigos = [];

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

