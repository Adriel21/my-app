import estilos from './Header.module.css';
import Nav from './Nav/Nav';

const Header = () => {
    return(
        <header className={estilos.cabecalho}>
            <h1>Logo</h1>
           <Nav />
        </header>
    )
}

export default Header;

