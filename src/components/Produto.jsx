import { useParams } from "react-router-dom"

import Img1 from '../assets/agenda.png'
import Img2 from '../assets/almochaveiro.png'
import Img3 from '../assets/almofada.png'
import Img4 from '../assets/azulejo.png'
import Img5 from '../assets/caderno.png'
import Img6 from '../assets/camisa.png'
import Img7 from '../assets/caneca.png'

export default function Produto(){
    const {product}=useParams()

    return(
        <>
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'   }}>
            
            <h1>{product}</h1>

                {product == 'agenda' && (<img src={Img1} style={{ width: '350px' }} />) }
                {product == 'chaveiro' && (<img src={Img2} style={{ width: '350px' }} />) }
                {product == 'almofada' && (<img src={Img3} style={{ width: '350px' }} />) }
                {product == 'azulejo' && (<img src={Img4} style={{ width: '350px' }} />) }
                {product == 'caderno' && (<img src={Img5} style={{ width: '350px' }} />) }
                {product == 'camisa' && (<img src={Img6} style={{ width: '350px' }} />) }
                {product == 'caneca' && (<img src={Img7} style={{ width: '350px' }} />) }
            
                <p style={{ textAlign: 'center' }}>
                    {product == 'camisa' && '39,90'}
                    {product == 'almofada' && '19,90'}
                    {product == 'azulejo' && '19,90'}
                    {product == 'chaveiro' && '12,90'}
                    {product == 'caneca' && '19,90'}
                    {product == 'caderno' && '19,90'}
                    {product == 'agenda' && '14,90'}
                </p>
            </div>
        </>
    )
}