import styled from "styled-components"
import { Link } from "react-router-dom"


export const Navbar = styled.nav`
    background: var(--color-primary-700);
    display: flex;
    height: 10vh;
    width: 100vw;
`

export const Logo = styled.img`
    margin-left: 1rem;
    padding: .5rem;
    width: 200px;
`

export const NavList = styled.ul`
    align-items: center;
    display: flex; 
    justify-content: center;
    height: 100%;
    margin-left: 21%;
`
export const NavItem = styled.li`
    color: wheat;
    cursor: pointer;
    list-style: none;
    margin: 0 1rem;
    text-transform: uppercase;

    &:hover {
        color: var(--color-secondary-500);
        font-weight: bold;
    }
`

export const NavLink = styled(Link)`
    color: var(--color-secondary-100);
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
        color: var(--color-secondary-500);
        font-weight: bold;
    }
`
export const Dropdow = styled.ul`
    border-radius: 5px;
    position: absolute;
    top: 5%;
    left: 58%;
    background-color: white;
    border-top: .5rem solid #56c734;
    padding: 10px;
    margin-top: 1rem; /* Espaço de quadro branco */
    list-style: none;
    display: ${props => (props.open ? "block" : "none")};
`
export const DropdowItem = styled.li`
    color: var(--color-primary-700);
    margin: .5rem;
    font-weight: bold;

    &:hover {
        color: var(--color-secondary-500);
        font-weight: bold;
    }
`