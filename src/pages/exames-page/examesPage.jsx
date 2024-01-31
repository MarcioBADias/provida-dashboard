import { useEffect, useState } from "react"
import { Menu } from "../../components/menu/menu"
import * as S from './style'

const ExPage = () => {
    const [exData, setExData] = useState([])
    const [filteredExData, setFilteredExData] = useState([])
    const [searchEx, setSearchEx] = useState('')

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/MarcioBADias/apis-provida/main/exames.json')
            .then(r => r.json())
            .then(data => {
                setExData(data)
                setFilteredExData(data)
            })
            .catch(console.log)
    }, [])

    const handleChangeSearchEx = e => {
        const searchValue = e.target.value.toLowerCase()
        setSearchEx(searchValue)
        const filteredEx = exData.filter(ex => ex.name?.toLowerCase().includes(searchValue))
        setFilteredExData(filteredEx)
    }

    return (
        <>
            <Menu />
            <h1 style={{textAlign: 'center', marginTop: '1rem'}}>Exames e valores</h1>
            <S.SearchContainer>
                <div>
                    <S.SearchInput type="text" value={searchEx} onChange={handleChangeSearchEx} placeholder='Buscar Exames...' />
                    <S.SearchBtn className="btn-search">Buscar</S.SearchBtn>
                </div>
            </S.SearchContainer>
            <S.CardContainer>
                {filteredExData.map(ex => (
                    <S.Card key={ex.crm}>
                        <S.CardBody className="card-body">
                            <S.MedAvatar />
                            <h3 className="card-title">{ex?.name}</h3>
                            <p className="card-text">Valor: R$ {ex?.price},00</p>
                            <p>Participativo: R$ {ex?.participative},00</p>
                            {ex?.obs && <p>Observações: {ex?.obs}</p>}
                            <div>
                            </div>
                        </S.CardBody>
                    </S.Card>
                ))}
            </S.CardContainer>
        </>
    )
}

export { ExPage }
