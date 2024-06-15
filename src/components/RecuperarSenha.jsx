import React, { useState } from 'react'
const [action, setAction] = useState("recuperarsenha");



<div className='container'>
<div className='header'>
<div className='text'>{action}</div> 
<div className='underline'></div>
    </div>
<div className='inputs'>




<div className='input'>
<AiTwotoneMail size={40}/>
        <input type="email" placeholder="Digite seu Email"/>


</div>
</div>
</div>













export default RecuperarSenha;
