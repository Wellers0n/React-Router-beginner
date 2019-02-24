import React from 'react';

const Sobre = ({history}) => {
    return (
        <div>
            <h1>Contato</h1>
            <button onClick={() => history.push('/')}>volta a home</button>
        </div>
    )
}

export default Sobre