import { useEffect, useState } from "react"
import { Menu } from "../components/menu/menu"

const MedicosPage = () => {
    const [medicsData, setMedicsData] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/MarcioBADias/apis-provida/main/medics.json')
            .then(r => r.json()).then(data => setMedicsData(data)).catch(console.log)
    }, [])
    return (
        <>
            <Menu />
            <div className="container">
                <h1>Página de Medicos</h1>
                <ul>
                    {
                        medicsData.map(medic =>{
                            return(<li key={medic.crm}>
                                <h2>Medico: {medic?.name}</h2>
                                <p>CRM: {medic?.crm}</p>
                                <p>Especialidade:{medic?.specialty}</p>
                            </li>)
                        })
                    }
                </ul>
            </div>
        </>
  )
}

  export { MedicosPage }