import { useState } from 'react'
import { Menu } from '../../components/menu/menu'
import * as S from './style'

const ConveniosPage = () => {
  const [data, setData] = useState('')
  const [turno, setTurno] = useState('manha')
  const [medicos, setMedicos] = useState([])
  const [formData, setFormData] = useState(null)

  const handleDataChange = (e) => {
    setData(e.target.value)
  }

  const handleTurnoChange = (e) => {
    setTurno(e.target.value)
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

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({ data, turno, medicos })
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
      {formData && (
        <S.TableArea>
          <table style={{ minWidth: '40%' }} border="1">
            <thead>
              <tr>
                <td colspan="3">{formData.data} - Segunda-feira</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="3">{formData.turno}</td>
              </tr>
              <tr>
                <td>Medico</td>
                <td>horario</td>
                <td>sala</td>
              </tr>
              {formData.medicos.map((medico, index) => (
                <tr key={index}>
                  <td>{medico.medico}</td>
                  <td>{`${medico.inicio} - ${medico.fim}`}</td>
                  <td>{medico.sala}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </S.TableArea>
      )}
    </>
  )
}

export { ConveniosPage }
