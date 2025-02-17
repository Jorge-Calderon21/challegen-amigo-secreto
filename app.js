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



