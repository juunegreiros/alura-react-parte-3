import React, { Fragment } from 'react'
import Header from '../../Components/Header/Header'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

const useEstilos = makeStyles({
    titulo: {
        textAlign: 'center',
        color: 'blue'
    }
})

const Sobre = () => {
    const classes = useEstilos()

    return (
        <Fragment>
            <Header />

            <Container maxWidth='sm'>
                <Typography
                    className={classes.titulo}
                    variant='h1'
                    component='h2'
                >
                    Sobre
                </Typography>
                <Typography variant='body1' component='p'>
                    A Casa do Código é uma editora que desenvolve e edita livros
                    em diversos formatos.
                </Typography>
            </Container>
        </Fragment>
    )
}
export default Sobre
