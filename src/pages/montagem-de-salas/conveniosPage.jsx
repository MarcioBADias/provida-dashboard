import { useEffect, useReducer } from 'react'
import { Menu } from '../../components/menu/menu'
import * as S from './style'

const reducer = (state, action) => {
  switch (action.type) {
    case 'set_dataMedics':
      return {
        ...state,
        dataMedics: action.payload?.length > 0 ? action.payload : [],
      }
    case 'set_day':
      return { ...state, day: action.payload }
    case 'set_turn':
      return { ...state, turn: action.payload }
    case 'add_medics':
      return {
        ...state,
        medics: [
          ...state.medics,
          { medico: '', especialidade: '', inicio: '', fim: '', sala: '' },
        ],
      }
    case 'update_medico':
      const { index, key, value } = action.payload
      const updatedMedics = [...state.medics]
      updatedMedics[index][key] = value
      return { ...state, medics: updatedMedics }
    case 'set_formData':
      return {
        ...state,
        formData: {
          day: state.day,
          turn: state.turn,
          medics: state.medics,
        },
      }
    default:
      return state
  }
}

const ConveniosPage = () => {
  const [state, dispatch] = useReducer(reducer, {
    day: null,
    turn: 'manha',
    medics: [],
    dataMedics: [],
    formData: null,
  })

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/MarcioBADias/apis-provida/main/medics.json',
    )
      .then((r) => r.json())
      .then((data) => dispatch({ type: 'set_dataMedics', payload: data }))
      .catch(console.log)
  }, [])

  const handleDataChange = (e) =>
    dispatch({ type: 'set_day', payload: e.target.value })

  const handleTurnoChange = (e) =>
    dispatch({ type: 'set_turn', payload: e.target.value })

  const handleAddMedic = () => dispatch({ type: 'add_medics' })

  const handleMedicChange = (index, key, value) =>
    dispatch({ type: 'update_medico', payload: { index, key, value } })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'set_formData' })
  }

  return (
    <>
      <Menu />
      <div>
        <h1 style={{ textAlign: 'center', margin: 20 }}>Escala das salas</h1>
        <S.FormSalas onSubmit={handleSubmit}>
          <label>
            Data:
            <input type="date" value={state.day} onChange={handleDataChange} />
          </label>
          <label>
            Turno:
            <select value={state.turn} onChange={handleTurnoChange}>
              <option value="manha">Manhã</option>
              <option value="tarde">Tarde</option>
            </select>
          </label>
          <button type="button" onClick={handleAddMedic}>
            Adicionar Médico
          </button>
          {state.medics.map((medico, index) => (
            <div key={index}>
              <S.InputSalas>
                <input
                  type="text"
                  placeholder="Médico"
                  value={medico.medico}
                  onChange={(e) =>
                    handleMedicChange(index, 'medico', e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Especialidade"
                  value={medico.especialidade}
                  onChange={(e) =>
                    handleMedicChange(index, 'especialidade', e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Início"
                  value={medico.inicio}
                  onChange={(e) =>
                    handleMedicChange(index, 'inicio', e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Fim"
                  value={medico.fim}
                  onChange={(e) =>
                    handleMedicChange(index, 'fim', e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Sala"
                  value={medico.sala}
                  onChange={(e) =>
                    handleMedicChange(index, 'sala', e.target.value)
                  }
                />
              </S.InputSalas>
            </div>
          ))}
          <button type="submit">Enviar</button>
        </S.FormSalas>
      </div>
      {state.formData && (
        <S.TableArea>
          <table style={{ minWidth: '40%' }} border="1">
            <thead>
              <tr>
                <td colSpan="3">{state.formData.day}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="3">{state.formData.turn}</td>
              </tr>
              <tr>
                <td>Medico</td>
                <td>horario</td>
                <td>sala</td>
              </tr>
              {state.formData.medics.map((medico, index) => (
                <tr key={index}>
                  <td>{medico.medico}</td>
                  <td>{`${medico.inicio} - ${medico.fim}`}</td>
                  <td>{medico.sala}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table style={{ minWidth: '40%' }} border="1">
            <thead>
              <tr>
                <td colSpan="3">{state.formData.day}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="3">{state.formData.turn}</td>
              </tr>
              <tr>
                <td>Medico</td>
                <td>horario</td>
                <td>sala</td>
              </tr>
              {state.formData.medics.map((medico, index) => (
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
