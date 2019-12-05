const ApiService = {

    ListaAutores : () =>{
        return fetch('http://localhost:8000/api/autor')
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());
    },
    CriaAutor : autor => {
        return fetch('http://localhost:8000/api/autor', {method: 'POST', headers: {'content-type': 'application/json'}, body: autor})
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());;
    },
    ListaNomes: () =>{
        return fetch('http://localhost:8000/api/autor/nome')
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());;
    },
    ListaLivros: () => {
        return fetch('http://localhost:8000/api/autor')
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());;
    },
    RemoveAutor: id => {
        return fetch(`http://localhost:8000/api/autor/${id}`, {method: 'DELETE', headers: { 'content-type' : 'application/json'},})
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());;
    },
    TrataErros : res =>{
        if(!res.ok){
            
            throw Error(res.responseText);
        }
        return res;
    } 

}
export default ApiService;