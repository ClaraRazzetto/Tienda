import React, { useState } from 'react'

const LoginForm = () => {

    const[user, setUser] = useState('');
    const[password, setPassword] = useState('');

    const loginHandler = () => {

    }
    
    return (
        <div className='container'>
        <h2>Login</h2>
            <form className='form-group' onSubmit={loginHandler}>
                    <label> Nombre de usuario </label>
                    <input type="text" value={user} />
                <br />
                    <label> Contraseña </label>
                    <input type="password" value={password} />
                <br />
                <button className='form-btn'>Ingresar</button>
            </form>
        </div>
    )
}

export default LoginForm