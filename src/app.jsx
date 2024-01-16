import { useState } from "react"

const App = () => {
  const [openDropdown, setOpenDropdow] = useState(false)

  const handleClickDropdown = () => setOpenDropdow(prev => !prev)
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Especialidades</a>
          </li>
          <li className="nav-item dropdown" onClick={handleClickDropdown}>
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Unidades
            </a>
            {
              openDropdown &&
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Cabo Fio - São Cristovão</a></li>
                <li><a className="dropdown-item" href="#">Cabo Frio - Passagem</a></li>
                <li><a className="dropdown-item" href="#">São Pedro da Aldeia</a></li>
              </ul>}
          </li>
        </ul>
      </nav>
    </>
  )
}

export { App }
