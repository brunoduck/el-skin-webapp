import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

import styled from "styled-components"

const SobreContainer = styled.section`
    width: 100vw;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
`

const SobreDetalhes = styled.div`
    display: flex;

    div {
        padding: 20px;
    }
`

const SobreImagemFinal = styled.div`
    padding: 20px;
`

const ButtonFaleConosco = styled.button`
    background-color: #94426E;
    color: #fff;
    border-radius: 8px;
    border: none;
    font-size: 18px;
    padding: 25px 50px;
`

function Sobre(){
    return (
        <SobreContainer>
            <SobreDetalhes>
                <div>
                    <p>Sobre a AL SKIN</p>

                    <p>Quem somos?</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>

                    <p>Por que existimos?</p>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>

                    <p>O que a gente faz?</p>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                    <img src="/assets/sobre-1.png"/>
                </div>
                <div>
                    <img src="/assets/sobre-2.png"/>
                    <p>Vamos conversar?</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                    <p><ButtonFaleConosco><FontAwesomeIcon icon={faCommentDots} />Fale conosco</ButtonFaleConosco></p>
                </div>
            </SobreDetalhes>
            <SobreImagemFinal>
                <img src="/assets/sobre-3.png"/>
            </SobreImagemFinal>
        </SobreContainer>
    )
}

export default Sobre