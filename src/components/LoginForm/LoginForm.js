import React from 'react'

const LoginForm = () => {
    return (
        <div>
            <h1>Formulario</h1>
            <form action="Formulario Utn">
                <p>
                    <label htmlFor="Nombre">Nombre</label>
                    <input id="nombre" type="text" placeholder='nombre' name="Nombre" />
                </p>
                <p>
                    <label htmlFor="Apellido">Apellido</label>
                    <input id="apellido" type="text" placeholder='apellido' name='apellido' />
                </p>
                <p>
                    <label htmlFor="Email">Email</label>
                    <input id="Email" type="text" placeholder='email' name='email' />
                </p>
                <p>
                    <label htmlFor="Telefono">Telefono</label>
                    <input id="telefono" type="tel" placeholder='telefono' name='telefono' />
                </p>
                <p>
                    <label htmlFor="Password">Password</label>
                    <input id="password" type="password" placeholder='******' />
                </p>
                <p>
                    <label htmlFor="Confirmar password"> Confirmar Password</label>
                    <input id="password" type="password" placeholder='******' />
                </p>
            </form>
            <button>Registrarse</button>
        </div>
    )
}

export default LoginForm