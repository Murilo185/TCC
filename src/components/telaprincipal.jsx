import Cabecalho from './cabecalho.jsx'
import './telaprincipal.css'
import camisa from '../assets/camisa.png'
import caneca from '../assets/caneca.png'
import almofada from '../assets/almofada.png';
import caderno from '../assets/caderno.png'
import azulejo from '../assets/azulejo.png'
import agenda from '../assets/agenda.png'
import chaveiro from '../assets/almochaveiro.png'
import whatsapp from '../assets/whatsapp.svg'

export default function TelaPrincipal (){
    return (
    <>
        <Cabecalho />
        <input type="text" id='busca' />
            
        <div id="containner">
            <div id="camisa">
                
                <a href="pgProduto/camisa.jsx">
                    <img src={camisa} alt="" />
                </a>
                <p className="nomeProduto ">Camisa</p>
                <p className="Descricao">A partir de <span>39</span>,90</p>
            </div>

            <div id="Caneca">
                <a href="pgProduto/caneca.jsx">
                    <img src={caneca} alt="" />
                </a>
                <p className='nomeProduto'>Caneca</p>
                <p className="Descricao">A partir de <span>19</span>,90</p>
            </div>

            <div id="Almofada">
                <a href="pgProduto/almofada.jsx">
                    <img src={almofada} alt="" />
                </a>
                <p className='nomeProduto' >Almofada</p>
                <p className="Descricao">A partir de <span>19</span>,90</p>
            </div>

            <div id="Caderno">
                <a href="pgProduto/caderno.jsx">
                    <img src={caderno} alt="" />
                </a>
                <p className='nomeProduto'>Caderno</p>
                <p className="Descricao">A partir de <span>19</span>,90</p>
            </div>

            <div id="Azulejo">
                <a href="pgProduto/azulejo.jsx">
                    <img src={azulejo} alt="" />
                </a>
                <p className='nomeProduto'>Azulejo</p>
                <p className="Descricao">A partir de <span>19</span>,90</p>
            </div>

            <div id="Agenda">
                <a href="pgProduto/agenda.jsx">
                    <img src={agenda} alt="" />
                </a>
                <p className='nomeProduto'>Agenda</p>
                <p className="Descricao">A partir de <span>14</span>,90</p>
            </div>

            <div id="Chaveiro">
                <a href="pgProduto/chaveiro.jsx">
                    <img src={chaveiro} alt="" />
                </a>
                <p className='nomeProduto'>Chaveiro</p>
                <p className="Descricao">A partir de <span>12</span>,90</p>
            </div>
        </div>
        <img src={whatsapp} alt="" id='whatsapp'/>
    </>
    )
}

