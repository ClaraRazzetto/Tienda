import { useState } from "react"


const SingUpForm = () => {

    const[user, setUser] = useState('');
    const[password, setPassword] = useState('');
    const[email, setEmail] = useState('');
    const[error, setError] = useState('');

    const userChangeHandler = (event) => {
        setUser(event.target.value);
    }
    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const addUserHandler = () => {

    }


    return (
        <div className='container'>
        <h2>Formulario de Registro</h2>
        <hr />
        <form className='form-group'  onSubmit={addUserHandler}>
    
            <label>Usuario</label>
            <input type="text" value={user} onChange={userChangeHandler} />
         <br />
            <label>Email</label>
            <input type="email" value={email} onChange={emailChangeHandler}/>
          <br />
            <label>Contraseña</label>
            <input type="password" value={password} onChange={passwordChangeHandler}/>
          <br />
          <button className='form-btn'>Registrarse</button>
        </form>
        {error && <span>{error}</span>}
      </div>
    )
  }

export default SingUpForm