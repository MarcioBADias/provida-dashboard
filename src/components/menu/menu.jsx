import { useState } from "react"
import * as S from './style'
import Logo from '/logo-provida.png'

const Menu = () => {
    const [openDropdown, setOpenDropdow] = useState(false)
  
    const handleClickDropdown = () => setOpenDropdow(prev => !prev)

    return (
    <S.Navbar>
        <S.Logo src={Logo} alt="Logo da Provida" />
        <S.NavList>
          <S.NavItem>
            <S.NavLink  to="/">Home</S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink  to="/especialidades" >Especialidades</S.NavLink>
          </S.NavItem>
          <S.NavItem onClick={handleClickDropdown}>
              Unidades
            {
              openDropdown &&
              <S.Dropdow open ={openDropdown}>
                <S.NavLink  to="/unidade-matriz" ><S.DropdowItem>Cabo Fio - São Cristovão</S.DropdowItem></S.NavLink>
                <S.NavLink  to="/unidade-passagem" ><S.DropdowItem>Cabo Frio - Passagem</S.DropdowItem></S.NavLink>
                <S.NavLink  to="/unidade-sao-pedro" ><S.DropdowItem>São Pedro da Aldeia</S.DropdowItem></S.NavLink>
              </S.Dropdow>}
          </S.NavItem>
        </S.NavList>
      </S.Navbar>
      )
}

export { Menu }