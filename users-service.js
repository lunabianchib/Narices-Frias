const listaUsuarios = () => fetch("").then((respuesta) => respuesta.json());

export const clientServices = {
    listaUsuarios,
}