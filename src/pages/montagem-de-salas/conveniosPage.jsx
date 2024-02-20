import { useState } from 'react'
import { Menu } from '../../components/menu/menu'
import * as S from './style'

const ConveniosPage = () => {
  const [data, setData] = useState('')
  const [turno, setTurno] = useState('manha')
  const [medicos, setMedicos] = useState([])

  const handleDataChange = (event) => {
    setData(event.target.value)
  }

  const handleTurnoChange = (event) => {
    setTurno(event.target.value)
  }

  const handleAddMedico = () => {
    setMedicos([
      ...medicos,
      { medico: '', especialidade: '', inicio: '', fim: '', sala: '' },
    ])
  }

  const handleMedicoChange = (index, key, value) => {
    const updatedMedicos = [...medicos]
    updatedMedicos[index][key] = value
    setMedicos(updatedMedicos)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setMedicos([])
  }

  return (
    <>
      <Menu />
      <div>
        <h1 style={{ textAlign: 'center', margin: 20 }}>Escala das salas</h1>
        <S.FormSalas onSubmit={handleSubmit}>
          <label>
            Data:
            <input type="date" value={data} onChange={handleDataChange} />
          </label>
          <label>
            Turno:
            <select value={turno} onChange={handleTurnoChange}>
              <option value="manha">Manhã</option>
              <option value="tarde">Tarde</option>
            </select>
          </label>
          <button type="button" onClick={handleAddMedico}>
            Adicionar Médico
          </button>
          {medicos.map((medico, index) => (
            <div key={index}>
              <S.InputSalas>
                <input
                  type="text"
                  placeholder="Médico"
                  value={medico.medico}
                  onChange={(e) =>
                    handleMedicoChange(index, 'medico', e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Especialidade"
                  value={medico.especialidade}
                  onChange={(e) =>
                    handleMedicoChange(index, 'especialidade', e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Início"
                  value={medico.inicio}
                  onChange={(e) =>
                    handleMedicoChange(index, 'inicio', e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Fim"
                  value={medico.fim}
                  onChange={(e) =>
                    handleMedicoChange(index, 'fim', e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Sala"
                  value={medico.sala}
                  onChange={(e) =>
                    handleMedicoChange(index, 'sala', e.target.value)
                  }
                />
              </S.InputSalas>
            </div>
          ))}
          <button type="submit">Enviar</button>
        </S.FormSalas>
      </div>
      <S.TableArea>
        <table style={{ minWidth: '40%' }} border="1">
          <thead>
            <tr>
              <th colspan="2">Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="2">11/02/2024 - Segunda-feira</td>
            </tr>
            <tr>
              <td>Turno</td>
              <td>Horário</td>
            </tr>
          </tbody>
        </table>

        <table style={{ minWidth: '40%' }} border="1">
          <thead>
            <tr>
              <th colspan="2">Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="2">11/02/2024 - Segunda-feira</td>
            </tr>
            <tr>
              <td>Turno</td>
              <td>Horário</td>
            </tr>
          </tbody>
        </table>
      </S.TableArea>
    </>
  )
}

export { ConveniosPage }
