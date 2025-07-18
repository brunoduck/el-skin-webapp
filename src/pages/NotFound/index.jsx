import styled from "styled-components"
import Step from "./step"

const StepsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const status = 4

function NotFound(){
    return (
        <h4>Ops! Endereço não encontrado</h4>  
    )
}

export default NotFound