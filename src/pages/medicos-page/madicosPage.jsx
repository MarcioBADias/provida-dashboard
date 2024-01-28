import { useEffect, useState } from "react"
import { Menu } from "../../components/menu/menu"
import * as S from './style'


const MedicosPage = () => {
    const [medicsData, setMedicsData] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/MarcioBADias/apis-provida/main/medics.json')
            .then(r => r.json()).then(data => setMedicsData(data)).catch(console.log)
    }, [])
    return (
        <>
            <Menu />
            <div>
                <h1>Página de Medicos</h1>
            </div>
            <S.CardContainer>
                {
                    medicsData.map(medic => (
                            <S.Card key={medic.crm}>
                                <S.CardBody className="card-body">
                                    <S.MedAvatar />
                                    <h5 className="card-title">{medic?.name}</h5>
                                    <p className="card-text">CRM: {medic?.crm}</p>
                                    <p>Especialidade:{medic?.specialty}</p>
                                    <div>
                                        <a href="#" className="btn btn-primary">Amil</a>
                                        <a href="#" className="btn btn-primary">Bradesco</a>
                                        <a href="#" className="btn btn-primary">Notredame</a>
                                    </div>
                                </S.CardBody>
                            </S.Card>
                        )
                    )
                }
            </S.CardContainer>
        </>
  )
}

  export { MedicosPage }