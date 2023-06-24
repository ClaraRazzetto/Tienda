import React, { useState } from 'react'

const LoginForm = () => {

    const [username, setUserName] = useState();
    const [password, setPasword] = useState();


    return (
        <div>
            <form>
                <div>
                    <label> Nombre de usuario </label>
                    <input type="text" value={username} />
                </div>
                <div>
                    <label> Contraseña </label>
                    <input type="password" value={password} />
                </div>

            </form>
        </div>
    )
}

export default LoginForm