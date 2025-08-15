import styled from "styled-components"
import Tag from "./Tag"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from "../../../context/CartContext"
import { useCallback } from "react"

const ProductsCardContainer = styled.div`
    width: calc(25% - 80px);
    display: flex;
    flex-direction: column;
    padding: 20px;

    border: 1px solid #eeeeee;
    box-shadow: 1px -1px 9px -3px rgba(0,0,0,0.59);
    -webkit-box-shadow: 1px -1px 9px -3px rgba(0,0,0,0.59);
    -moz-box-shadow: 1px -1px 9px -3px rgba(0,0,0,0.59);

    border-radius: 5px;

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

const ProductImg = styled.img`
    border-radius: 5px;
`

function ProductsCard({product}){
    const { addItem, getTotalItems } = useCartContext();

    const handleBuyClick = useCallback((event: React.MouseEvent) => {
        event.stopPropagation()

        console.log(`comprar produto: ${product.id}`)

        addItem(product)
    })

    return (
        <ProductsCardContainer>
            <ProductImg src={product.image} alt={product.name} />
            <ProductTitle>{product.name}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductTags>
                <Tag label="proteção" color={"#5ED4DC"} />
                <Tag label="rosto" color={"#DC5EB1"} />
            </ProductTags>
            <ProductFooter>
                <Price>R$ {String(product.price).replace('.',',')}</Price>
                <BuyAction data-testid="buy-button" onClick={(e) => handleBuyClick(e)}>comprar <FontAwesomeIcon icon={faBagShopping} /></BuyAction>
            </ProductFooter>
        </ProductsCardContainer>
    )
}

export default ProductsCard