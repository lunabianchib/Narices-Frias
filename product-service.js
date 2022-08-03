const listaProductos = () => fetch("").then((respuesta) => respuesta.json());

const listaCategoria = () => fetch("").then((respuesta) => respuesta.json());

const crearProducto = (nombre, descripcion, precio, imagen, categoria) => {
 return fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id: uuid.v4(), nombre, descripcion, precio, imagen, categoria}),
    });
};

const detalleProducto = (id) => {
    return fetch(`${id}`).then((respuesta) => respuesta.json());
};

const actualizarProducto = (id, nombre, descripcion, precio, imagen, categoria) => {
    return fetch(`${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, descripcion, precio, imagen, categoria})
    }).then((respuesta) => respuesta)
    .catch((err) => console.log(err));
} 

 const eliminarProducto = (id) => {
    return fetch(`/${id}`,{
        method: 'DELETE',
    });
}

export const productServices = {
    listaProductos, 
    listaCategoria,
    crearProducto,
    detalleProducto,
    actualizarProducto,
    eliminarProducto,
}