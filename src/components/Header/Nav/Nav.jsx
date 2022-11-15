// import estilos from './Nav.module.css'
import styled from "styled-components";

const Navegacao = styled.nav`
    background-color: black;
    
`

const Nav = () => {
    return(
    <Navegacao>
        <ul >
            <li>Início</li>
            <li>Sobre</li>
            <li>Contato</li>
        </ul>
    </Navegacao>
    )
}

export default Nav;