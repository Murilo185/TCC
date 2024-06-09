import React, { useState } from 'react'
import './LoginRegistro.css'
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import { AiTwotoneMail } from "react-icons/ai";

import axios from 'axios';

//Constante da tela de login e registro//
const Login = () => {
// Função de esconder e mostrar senha
    // function myFunction() {
    //     var x = document.getElementById("myInput");
    //     if (x.type === "password") {
    //       x.type = "text";
    //     } else {
    //       x.type = "password";
    //     }
    //   }

    const [action, setAction] = useState("Login");

    function env(){
        axios.get('http://localhost:3000/'
           
          )
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

//Retorno do login e registro//
    return (
    <div className='container'>
    <div className='header'>
<div className='text'>{action}</div> 
<div className='underline'></div>
    </div>
<div className='inputs'>
    {action==="Login"?<div></div>:    <div className='input'>
    <IoMdPerson  size={40}/>
        <input type="text" placeholder="Nome" />
        
</div>}

<div className='input'>
<AiTwotoneMail size={40}/>
        <input type="email" placeholder="Email"/>
</div>
<div className='input'>
<AiFillEyeInvisible size={40} />
        <input type="password"  id="myInput" placeholder="Senha"/>
        {/*Tentativa de esconder e mostrar senha <input type="checkbox" onclick="myFunction()"/> */}
</div>
 </div>

 {action==="Registro"?<div></div>:<div className="esqueceu-senha">Esqueceu sua senha?  <a href='#'> Clique aqui!</a></div>}

 {action==="Login"?<div></div>:  <div className="termo" >  
    <input type="checkbox" id="contrato" name="contrato" value="termo"/> 
    <label for="contrato">Aceito os termos de uso.</label>
</div>}

 <div className="submit-container"
 onClick={() => env()}>
    <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{
        setAction("Login")
        env()
        
    }}>Login</div>

    <div className={action==="Registro"?"submit gray":"submit"} onClick={()=>{setAction("Registro")}}>Registro</div>

 </div>
 {action==="Registro"?<div></div>: <div className='cadastro'>Não possui uma conta? <a href='#' onClick={()=>{setAction("Registro")}}>Cadastre-se aqui.</a></div>}
</div>

    )
}



export default Login;