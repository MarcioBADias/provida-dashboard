import { useState } from "react"
import { Menu } from "./components/menu"

const App = () => {
  const [selectBox, setSelectBox] = useState(true)
  const [newsLetter, setNewLetter] = useState(false)
  //const [convenios, setConvenios] = useState(false)
  //const [medicos, setMedicos] = useState(false)
  //const [exames,setExames] = useState(false)

  const handleClickInBox = (e) => {
    if(e.target.className.includes('newsLetter')) {
      setSelectBox(prev => !prev)
      setNewLetter(prev => !prev)
    }
  }
  return (
    <>
      <Menu />

      <div className="container" onClick={handleClickInBox}>
      {selectBox && <div className="newsLetter">
          {
            newsLetter && <div className="container newsLetter">
              <h1>Pagina de noticias</h1>
            </div>
          }
        </div>}
        <div className="optionBox">
        {selectBox && <div className="convenios box">
            <h1>Teste Fonte</h1>
          </div>}
          {selectBox && <div className="medicos box">
            
          </div>}
          {selectBox && <div className="exames box">
            
          </div>}
        </div>
      </div>
    </>
  )
}

export { App }
