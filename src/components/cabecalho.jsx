import './cabecalho.css';
import logo from '../assets/logo.png';
import notificacao from '../assets/notificacao.svg';
import usuario from '../assets/usuario.svg'
import carrinho from '../assets/carrinho.svg'

export default function Cabecalho (){
    
    return (
    <div id='cabecalho'>
        <img src={logo} id='logo'/>

        <div id="notificacaoUsuarioCarrinho">
            <img src={notificacao} id='notificacao'/>

            <a href="./LoginRegistro">
                <img src={usuario} id='usuario' />
            </a>

            <img src={carrinho} id="carrinho" />
        </div>
    </div>

    )
}

