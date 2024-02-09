import { Link } from "react-router-dom"
import { Menu } from "./components/menu/menu"

const App = () => {
  return (
      <>
        <Menu />

        <div className="container">
          <Link style={{textDecoration: 'none'}} to="/newsLetter">
            <div className="newsLetter">
              <div className="container newsLetter">
                <h2>Pagina de noticias</h2>
              </div>
            </div>
          </Link>
          <div className="optionBox">
              <Link to="/convenios">
                <div className="convenios box">
                  <h2>Convenios</h2>
                </div>
              </Link>
              <Link to="/medicos">
                <div className="medicos box">
                  <h2>Médicos</h2>
                </div>
              </Link>
              <Link to="/exames">
                <div className="exames box">
                  <h2>Exames</h2>
                </div>
              </Link>
          </div>
        </div>
      </>
  )
}

export { App }
