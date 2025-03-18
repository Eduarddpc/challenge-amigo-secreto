// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];    //creando el arreglo para la intriduccion de nombres de amigos

function agregarAmigo() {            //creando la funcion para poder agregar los amigos
        let amigo = document.getElementById('socio').value;
            if (amigo === ''){              // Creando la sentencia para alertar al usuario de que el campo esta vacio 
                alert('El espacio esta vacio, por favor ingresa algun nombre');
            } else {
                nombres.push(amigo);
                alert(`${amigo} ha sido agregado a la lista de amigos.`);
            }    
        }
function limpiarCaja() {  //funcion para limpiar la caja o el campo ded texto 
            document.getElementById('socio').value = '';
        }


function cadenaAmigo(){
    let listaA = document.getElementById('listaAmigos');
    listaA.innerHTML = "";  //limpia la lista para poder agregar nuevos valores
   
 for (var i = 0; i < nombres.length; i++) {
        var li = document.createElement('li'); // Crear un nuevo <li> para cada amigo
        li.textContent = nombres[i]; // Asignar el nombre al <li>
        listaA.appendChild(li); // Añadir el <li> a la lista <ul> para poder almacenar
    }
} 
function sortearAmigo() {
    // Validar lista de amigos
    if (nombres.length === 0) {
        alert('No hay amigos para sortear. Agrega algunos amigos primero.');
        return; // Salir de la función si no hay amigos
    }

    // Generar un índice aleatorio 
    var indiceAleatorio = Math.floor(Math.random() * nombres.length);

    // Obtener el nombre del amigo sorteado
    var amigoSorteado = nombres[indiceAleatorio];

    // Mostrar el resultado 
    document.getElementById('resultado').innerHTML = 'El amigo sorteado es: ' + amigoSorteado;
}
agregarAmigo();
cadenaAmigo();