import styled from "styled-components"
import Step from "./step"

const StepsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const status = 4

function NotFound(){
    return (
        <StepsContainer>
            <Step 
                title="Etapa 1"
                done={status >= 1 ? true : false}
                active={status === 1 ? true : false}
                status={status}
            />
            <Step 
                title="Etapa 2"
                done={status >= 2 ? true : false}
                active={status === 2 ? true : false}
                status={status}
            />
            <Step 
                title="Etapa 3"
                description="Descrição da etapa 3"
                done={status >= 3 ? true : false}
                active={status === 3 ? true : false}
                status={status}
            />
            <Step 
                title="Etapa 4"
                done={status >= 4 ? true : false}
                active={status === 4 ? true : false}
                status={status}
            />
            <Step 
                title="Etapa 5"
                done={status >= 5 ? true : false}
                active={status === 5 ? true : false}
                last={true}
                status={status}
            />
        </StepsContainer>    
    )
}

export default NotFound