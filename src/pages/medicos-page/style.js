import styled from 'styled-components'
import { RxAvatar } from "react-icons/rx";

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 1rem;
    max-width: 100%;
`
export const MedAvatar = styled(RxAvatar)`
    align-items: center;
    color: #56c734;
    margin-bottom: .5rem;
    height: 30%;
    width: 30%;
`

export const Card = styled.div`
    margin: 1rem;
    width: 20%;
`
export const CardBody = styled.div`
    align-items: center;
    border: 1px solid #56c734;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    min-height: 40vh;
    padding: 1rem;
`