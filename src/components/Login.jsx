import React, { useState } from 'react'
import './Login.css'
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import { AiTwotoneMail } from "react-icons/ai";


//Constante da tela de login//
const Login = () => {

    const [action, setAction] = useState("Login");

//Retorno do login//
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
<AiFillEyeInvisible size={40}/>
        <input type="password" placeholder="Senha"/>
</div>
 </div>
 

 {action==="Registro"?<div></div>:<div className="esqueceu-senha">Esqueceu sua senha?<span>Clique aqui!</span></div>}

 <div className="submit-container">
    <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
    <div className={action==="Registro"?"submit gray":"submit"} onClick={()=>{setAction("Registro")}}>Registro</div>
 </div>
 <div className='cadastro'>Não possui uma conta? Cadastre-se aqui.</div>
</div>

    )
}

export default Login;