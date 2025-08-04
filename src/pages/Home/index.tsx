import styled from "styled-components"
import Destaque from "../../components/Destaque"
import Carousel from "../../components/Carousel"
import ProductsList from "../../components/ProductsList"

const HomeContainer = styled.section`
    width: 100vw;
`

const DestaqueContainer = styled.section`
    background-color: #DC995E;
    width: 100vw;
    color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductsContainer = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

function Home(){
    return (
        <HomeContainer>
            <DestaqueContainer>
                <Destaque />
            </DestaqueContainer>
            <ProductsContainer>
                <Carousel />
                <ProductsList />
            </ProductsContainer>
        </HomeContainer>
    )
}

export default Home