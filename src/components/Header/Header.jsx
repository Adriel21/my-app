// import estilos from './Header.module.css';
import styled from 'styled-components';
import Nav from './Nav/Nav';

const periodo = "asd";

const StyledCabecalho = styled.header`     
    display: flex;
    align-items: center;
    justify-content: space-around;

    h1{
        color: red;

        &:hover{
            background-color: ${periodo === "noturno" ? "black":"blue"};
        }
    }

    
`

const Header = () => {
    return(
        <StyledCabecalho>
            <h1>Logo</h1>
           <Nav />
        </StyledCabecalho>
    )
}

export default Header;

