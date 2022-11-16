import estilos from './Nav.module.css'
import styled from "styled-components";
import { NavLink } from 'react-router-dom';



const Nav = () => {
    return(
    <nav>
        <ul className={estilos.menu}>
            <li><NavLink to="/">Início</NavLink></li>
            <li><NavLink to="/sobre">Sobre</NavLink></li>
            <li>Contato</li>
        </ul>
    </nav>
    )
}

export default Nav;