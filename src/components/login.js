import React, { useState } from 'react';

import './login.css';

const Login = () => {
 
  const elemento= (
    <div className= "letra">
            <h2>Iniciar Sesión</h2>
        <form >
        <label htmlFor="new-todo">
        
            Usuario: 
            <br/> 
          </label>
            <input
                 type="text" 
                 name= "title"
                 placeholder="" 
               />
            <br />
            <br />
            <br />
            <label htmlFor="new-todo">
            Contraseña: 
            <br/> 
          </label>
            <input
                name= "description"
                placeholder= "" 
               />
            <br/> 
            <br/> 
            <div className= "alinearBoton">
                  <button className= "button ">Ingresar</button>
                  <button className= "button ">Recuperar Contraseña</button>
            </div>

            <br/> 
        </form>
        </div>
  );

 // console.log(elemento);
  return elemento;
};
export default Login;
