import { Link } from "react-router-dom"
import { Menu } from "./components/menu/menu"

const App = () => {
  return (
      <>
        <Menu />

        <div className="container">
          <Link to="/newsLetter">
            <div className="newsLetter">
              <div className="container newsLetter">
                <h1>Pagina de noticias</h1>
              </div>
            </div>
          </Link>
          <div className="optionBox">
              <Link to="/convenios">
                <div className="convenios box">

                </div>
              </Link>
              <Link to="/medicos">
                <div className="medicos box">

                </div>
              </Link>
              <Link to="/exames">
                <div className="exames box">

                </div>
              </Link>
          </div>
        </div>
      </>
  )
}

export { App }
