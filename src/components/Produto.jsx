import { useParams } from "react-router-dom"

export default function Produto(){
    const {product}=useParams()

    return(
        <>
        <h1>{product}</h1>
        <h1>teste</h1>
        </>
    )
}