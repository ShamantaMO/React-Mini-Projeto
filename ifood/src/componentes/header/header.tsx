import Arnia from "../assets/arnia.png"
import { DivItens, Header } from "./styles"

const HeaderComponent = () =>{
    return(
        <Header>
            <DivItens>
                <img src={Arnia} alt=""/>
            </DivItens>
            <DivItens style={{color: 'white'}}>
                <h1>Loja Virtual</h1>
            </DivItens>
        </Header>

    )
}

export default HeaderComponent