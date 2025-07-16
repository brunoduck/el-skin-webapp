import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #000;
  width: 100vw;
  padding: 70px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
`;

const Titulo = styled.p`
    font-size: 20px;
    margin: 5px;
`
const Subtitulo = styled.p`
    font-size: 14px;
    margin: 5px;
`

function Footer(){
    return(
        <FooterContainer>
            <Titulo>AL SKIN</Titulo>
            <Subtitulo>2023 AL SKIN. Todos os direitos reservados</Subtitulo>
            <Subtitulo>Av. Sete de Setembro, 467 - São Paulo/SP  - CEP: 05324-980.</Subtitulo>
        </FooterContainer>
    )
}

export default Footer