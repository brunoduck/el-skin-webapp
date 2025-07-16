import styled from "styled-components"
import ProductsCard from "./ProductsCard"

const ProductsListContainer = styled.div`
    width: 100vw;
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Titulo = styled.p`
    padding: 25px;
    font-weight: 700;
`

const ProductsListItems = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-bottom: 54px;
`

function ProductsList(){
    return (
        <ProductsListContainer>
            <Titulo>nossos queridinhos estão aqui</Titulo>
            <ProductsListItems>
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
            </ProductsListItems>
        </ProductsListContainer>
    )
}

export default ProductsList