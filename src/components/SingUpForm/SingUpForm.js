import React, { useState } from "react";

const SingUpForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const userChangeHandler = (event) => {
    setUser(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto

    if (user.trim() === "") {
      setError("Ingrese un nombre de usuario válido.");
      return;
    }

    if (email.trim() === "") {
      setError("Ingrese un correo electrónico válido.");
      return;
    }

    if (password.trim() === "") {
      setError("Ingrese una contraseña válida.");
      return;
    }

    // Si todas las validaciones pasan, puedes realizar alguna acción adicional aquí, como enviar los datos al servidor.

    // Reiniciar los campos y el estado de error después del envío exitoso
    setUser("");
    setPassword("");
    setEmail("");
    setError("");
  };

  return (
    <div className="container">
      <h2>Formulario de Registro</h2>
      <hr />
      <form className="form-group" onSubmit={addUserHandler}>
        <label>Usuario</label>
        <input type="text" value={user} onChange={userChangeHandler} />
        <br />
        <label>Email</label>
        <input type="email" value={email} onChange={emailChangeHandler} />
        <br />
        <label>Contraseña</label>
        <input type="password" value={password} onChange={passwordChangeHandler} />
        <br />
        <button className="form-btn">Registrarse</button>
      </form>
      {error && <span>{error}</span>}
    </div>
  );
};

export default SingUpForm;
