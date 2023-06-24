import React, { useState } from 'react';

const LoginForm = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const loginHandler = (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto

    if (user.trim() === '') {
      setError('Ingrese un nombre de usuario válido.');
      return;
    }

    if (password.trim() === '') {
      setError('Ingrese una contraseña válida.');
      return;
    }

    // Si todas las validaciones pasan, puedes realizar alguna acción adicional aquí, como enviar los datos al servidor.

    // Reiniciar los campos y el estado de error después del envío exitoso
    setUser('');
    setPassword('');
    setError('');
  };

  const userChangeHandler = (event) => {
    setUser(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className='container'>
      <h2>Login</h2>
      <form className='form-group' onSubmit={loginHandler}>
        <label>Nombre de usuario</label>
        <input type='text' value={user} onChange={userChangeHandler} />
        <br />
        <label>Contraseña</label>
        <input type='password' value={password} onChange={passwordChangeHandler} />
        <br />
        <button className='form-btn'>Ingresar</button>
      </form>
      {error && <span>{error}</span>}
    </div>
  );
};

export default LoginForm;
