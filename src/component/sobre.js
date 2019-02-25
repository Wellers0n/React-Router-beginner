import React from 'react';
import {Link, Route} from 'react-router-dom'

const Sobre = ({history}) => {
    return (
            <div>
                <h1>sobre</h1>
                <Link to={'/sobre/in'}>aqui irá abrir dentro so sobre</Link>
                <Route path="/sobre/in" component={sobreIn}/>
            </div>
    )
}

const sobreIn = ({history}) => {
    return (
        <div>
            <h1>dentro do sobre</h1>
            <button onClick={(e) => {
                e.preventDefault()
                return history.push('/contato')
                }}>Ir ao contato</button>
        </div>
    )
}

export default Sobre