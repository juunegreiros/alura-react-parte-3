import React, { Component, Fragment } from 'react'
import Header from '../../Components/Header/Header'
import Tabela from '../../Components/Tabela/Tabela'
import ApiService from '../../utils/ApiService'
import PopUp from '../../utils/PopUp'

class Autores extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nomes: [],
            titulo: 'Autores'
        }
    }

    componentDidMount() {
        ApiService.ListaNomes()
            .then(res => {
                if (res.message === 'success') {
                    PopUp.exibeMensagem(
                        'success',
                        'Autores Listados com sucesso'
                    )
                    this.setState({ nomes: [...this.state.nomes, ...res.data] })
                }
            })
            .catch(err =>
                PopUp.exibeMensagem(
                    'error',
                    'Falha na comunicação com a API ao listar os autores'
                )
            )
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className='container'>
                    <h1>Página de Autores</h1>
                    <Tabela
                        dados={this.state.nomes}
                        titulo={this.state.titulo}
                        campos={['nome']}
                    />
                </div>
            </Fragment>
        )
    }
}
export default Autores
