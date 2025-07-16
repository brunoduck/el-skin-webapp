import styled from "styled-components"

const NotFoundContainer = styled.section`
    height: calc(100vh - 443px);
    display: flex;
    align-items: center;
    justify-content: center;
`

function NotFound(){
    return (
        <NotFoundContainer>
            <h3>404! Não encontrado</h3>
            <p></p>
        </NotFoundContainer>
    )
}

export default NotFound