import { Menu } from "./components/menu"


const App = () => {
  return (
    <>
      <Menu />
      <div className="container">
        <h1>Convenios</h1>
      </div>
      <div className="container">
        <h1>Medicos</h1>
      </div>
      <div className="container">
        <h1>Exames</h1>
      </div>
    </>
  )
}

export { App }
