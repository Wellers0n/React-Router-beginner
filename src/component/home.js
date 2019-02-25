import React from 'react';
import {Link, Route, BrowserRouter} from 'react-router-dom'

const Home = ({history}) => {
    return (
        <BrowserRouter>
            <div>
                <h1>home</h1>
                <Link to={'/homeIn'}>aqui irá abrir dentro so home</Link>
                <Route path="/homeIn" component={HomeIn}/>
            </div>
        </BrowserRouter>

    )
}

const HomeIn = ({history}) => {
    return (
        <div>
            <h1>dentro do Home</h1>
            <button onClick={(e) => {
                e.preventDefault()
                return history.push('/sobre')
                }}>Ir ao sobre</button>
        </div>
    )
}
export default Home