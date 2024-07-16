import { useState } from "react"


type CardProps = {
    capa: string
    valor: string
}

const Card = ({capa, valor}: CardProps) => {
    const [corDoBotao, setCorDoBotao] = useState("white");

        const handleClick = () => {
            setCorDoBotao(corDoBotao === 'white' ? '#6950a1' : 'white')
        }

    return(
        <div>
            <img src={capa} alt="" />
            <div>
                <button onClick={handleClick} style={{backgroundColor: corDoBotao}}></button>
                <span>Valor: R${valor}</span>
            </div>
        </div>
    )
}

export default Card