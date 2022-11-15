import estilos from './Nav.module.css'

const Nav = () => {
    return(
    <nav >
        <ul className={estilos.menu}>
            <li>Início</li>
            <li>Sobre</li>
            <li>Contato</li>
        </ul>
    </nav>
    )
}

export default Nav;