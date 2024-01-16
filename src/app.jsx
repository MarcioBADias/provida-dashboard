const App = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Especialidades</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Unidades
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Cabo Fio - São Cristovão</a></li>
              <li><a className="dropdown-item" href="#">Cabo Frio - Passagem</a></li>
              <li><a className="dropdown-item" href="#">São Pedro da Aldeia</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  )
}

export { App }
