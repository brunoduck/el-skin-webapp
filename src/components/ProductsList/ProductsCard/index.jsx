import styled from "styled-components"
import Tag from "./Tag"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

const ProductsCardContainer = styled.div`
    width: calc(25% - 80px);
    display: flex;
    flex-direction: column;
    padding: 20px;

    p {
        margin: 10px 0 0 0;
        padding: 5px 0;
    }
`

const ProductTitle = styled.p`
    font-size: 1.3em;
    font-weight: 700;
    color: #222222;
`
const ProductDescription = styled.p`
    font-size: 1em;
    color: #878787;
`

const ProductTags = styled.div`
    display: flex;
    gap: 5px;
`

const ProductFooter = styled.div`
    display: flex;
    gap: 5px;
    justify-content: space-between;
    margin-top: 15px;
`

const Price = styled.div`
    font-size: 20px;
    font-weight: 700;
    font-size: 20px;
`

const BuyAction = styled.div`
    font-size: 20px;
    color: #fff;
    font-weight: 700;
    border: none;
    border-radius: 8px;
    padding: 3px 10px;
    background-color: #7045F5;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`

function ProductsCard(){
    return (
        <ProductsCardContainer>
            <img src="/assets/product.png" />
            <ProductTitle>Protetor solar AL SUN</ProductTitle>
            <ProductDescription>alta proteção e pele luminosa sem grude nem pele cinzenta</ProductDescription>
            <ProductTags>
                <Tag label="proteção" color={"#5ED4DC"} />
                <Tag label="rosto" color={"#DC5EB1"} />
            </ProductTags>
            <ProductFooter>
                <Price>R$ 79,90</Price>
                <BuyAction>comprar <FontAwesomeIcon icon={faBagShopping} /></BuyAction>
            </ProductFooter>
        </ProductsCardContainer>
    )
}

export default ProductsCard