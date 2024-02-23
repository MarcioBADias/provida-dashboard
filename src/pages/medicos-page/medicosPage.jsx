import { useEffect, useState } from 'react'
import { Menu } from '../../components/menu/menu'
import * as S from './style'

const MedicosPage = () => {
  const [medicsData, setMedicsData] = useState([])
  const [filteredMedicsData, setFilteredMedicsData] = useState([])
  const [searchMed, setSearchMed] = useState('')
  const [searchSpecialty, setSearchSpecialty] = useState('')

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/MarcioBADias/apis-provida/main/medics.json',
    )
      .then((r) => r.json())
      .then((data) => {
        setMedicsData(data)
        setFilteredMedicsData(data)
      })
      .catch(console.log)
  }, [])

  const handleChangeSearchMed = (e) => {
    const searchValue = e.target.value.toLowerCase()
    setSearchMed(searchValue)
    filterMedics(searchValue, searchSpecialty)
  }

  const handleChangeSearchSpecialty = (e) => {
    const searchValue = e.target.value.toLowerCase()
    setSearchSpecialty(searchValue)
    filterMedics(searchMed, searchValue)
  }

  const filterMedics = (name, specialty) => {
    const filteredMedics = medicsData.filter(
      (medic) =>
        medic.name?.toLowerCase().includes(name) &&
        medic.specialty?.toLowerCase().includes(specialty),
    )
    setFilteredMedicsData(filteredMedics)
  }

  return (
    <>
      <Menu />
      <h1 style={{ textAlign: 'center', marginTop: '1rem' }}>
        Lista de médicos e especialidades
      </h1>
      <S.SearchContainer>
        <div>
          <S.SearchInput
            type="text"
            value={searchMed}
            onChange={handleChangeSearchMed}
            placeholder="Buscar Profissional..."
          />
          <S.SearchBtn className="btn-search">Buscar</S.SearchBtn>
        </div>
        <div>
          <S.SearchInput
            type="text"
            value={searchSpecialty}
            onChange={handleChangeSearchSpecialty}
            placeholder="Buscar por especialidade..."
          />
          <S.SearchBtn className="btn-search">Buscar</S.SearchBtn>
        </div>
      </S.SearchContainer>
      <S.CardContainer>
        {filteredMedicsData.map((medic) => (
          <S.Card key={medic.crm}>
            <S.CardBody className="card-body">
              <S.MedAvatar />
              <h3 className="card-title">{medic?.name}</h3>
              <p className="card-text">CRM: {medic?.crm}</p>
              <p>Especialidade: {medic?.specialty}</p>
              <div>
                <S.ConvBtn convenio={'amil'}>Amil</S.ConvBtn>
                <S.ConvBtn>Bradesco</S.ConvBtn>
                <S.ConvBtn>Notredame</S.ConvBtn>
              </div>
            </S.CardBody>
          </S.Card>
        ))}
      </S.CardContainer>
    </>
  )
}

export { MedicosPage }
