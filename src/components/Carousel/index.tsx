import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react"
import { http } from "../../service/http"

const CarouselContainer = styled.div`
    width: 100vw;
    max-width: 1440px;
    height: 680px;
    display: flex;
    transition: all ease 1.2s;
    background-image: url(/assets/carousel-1.png);
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: space-between;
`

const ButtonMove = styled.button`
    height: 40px;
    width: 40px;
    color: #FFF;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    align-self: center;
    margin: 30px;
    cursor: pointer;

    &:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }
`

function Carousel(){
    const [imagemAtualIndex, setImagemAtualIndex] = useState(0);
    const [imagens, setImagens] = useState([{backgroundImage: ''}]);


    useEffect(() => {
        http.get('carousel')
        .then(response => {
            setImagens(response.data)
        })
    },[])

    // Efeito para mudar a imagem automaticamente a cada 3 segundos
    useEffect(() => {
        const intervalo = setInterval(() => {
        setImagemAtualIndex((prevIndex) =>
            prevIndex === imagens.length - 1 ? 0 : prevIndex + 1
        );
        }, 5000); // Muda a imagem a cada 3 segundos

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(intervalo);
    }, [imagens]); // O array vazio assegura que o efeito rode apenas uma vez na montagem

    const irParaProximaImagem = () => {
        setImagemAtualIndex((prevIndex) =>
        prevIndex === imagens.length - 1 ? 0 : prevIndex + 1
        );
    };

    const irParaImagemAnterior = () => {
        setImagemAtualIndex((prevIndex) =>
        prevIndex === 0 ? imagens.length - 1 : prevIndex - 1
        );
    };


    return (
        <CarouselContainer style={{ backgroundImage: `url(${imagens[imagemAtualIndex].backgroundImage})` }}>
            <ButtonMove onClick={() => irParaProximaImagem()}><FontAwesomeIcon icon={faChevronLeft} /></ButtonMove>
            <ButtonMove onClick={() => irParaImagemAnterior()}><FontAwesomeIcon icon={faChevronRight} /></ButtonMove>
        </CarouselContainer>
    )
}

export default Carousel
