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
            <h1 style={{textAlign: 'center', marginTop: '1rem'}}>Lista de medicos e especialidades</h1>
            <S.SearchContainer>
                    <div>
                        <S.SearchInput type="text" className="search" placeholder='Buscar Profissional...'/>
                        <S.SearchBtn className="btn-search">Buscar</S.SearchBtn>
                    </div>
                    <div>
                        <S.SearchInput type="text" className="search" placeholder='Buscar por especialidade...'/>
                        <S.SearchBtn className="btn-search">Buscar</S.SearchBtn>
                    </div>
            </S.SearchContainer>
            <S.CardContainer>
                {
                    medicsData.map(medic => (
                            <S.Card key={medic.crm}>
                                <S.CardBody className="card-body">
                                    <S.MedAvatar />
                                    <h3 className="card-title">{medic?.name}</h3>
                                    <p className="card-text">CRM: {medic?.crm}</p>
                                    <p>Especialidade:{medic?.specialty}</p>
                                    <div>
                                        <S.ConvBtn convenio={'amil'} >Amil</S.ConvBtn>
                                        <S.ConvBtn >Bradesco</S.ConvBtn>
                                        <S.ConvBtn >Notredame</S.ConvBtn>
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