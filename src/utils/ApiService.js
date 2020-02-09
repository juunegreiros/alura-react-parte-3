const urlBase = 'http://localhost:8000/api/autor'

const consomeApi = (parametro = '', method = 'GET', body) => {
    return fetch(`${urlBase}/${parametro}`, {
        method,
        headers: { 'content-type': 'application/json' },
        body
    })
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json())
}

const ApiService = {
    ListaAutores: () => consomeApi(),
    CriaAutor: autor => consomeApi('', 'POST', autor),
    ListaNomes: () => consomeApi('nome'),
    ListaLivros: () => consomeApi(),
    RemoveAutor: id => consomeApi(id, 'DELETE'),
    TrataErros: res => {
        if (!res.ok) {
            throw Error(res.responseText)
        }
        return res
    }
}
export default ApiService
