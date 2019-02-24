import React from 'react';

const Sobre = ({history}) => {
    return (
        <div>
            <h1>sobre</h1>
            <button onClick={() => history.push('/contato')}>Ir ao contato</button>
        </div>
    )
}

export default Sobre