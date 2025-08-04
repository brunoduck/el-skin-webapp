import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components"
import { useCartContext } from '../../../context/CartContext'

const CartProductCardContainer = styled.div`
    display: flex;
    padding: 16px;
`
const ProductTitle = styled.p`
    font-size: 1em;
    font-weight: 700;
    color: #222222;
    margin: 0;
`
const ProductDescription = styled.p`
    font-size: 1em;
    color: #878787;
`

const ProductInfo = styled.div`
    display: flex;
    padding: 16px;
    flex-direction: column;
`

const ProductImg = styled.img`
    width: 82px;
    height: 82px;
    border-radius: 5px;
    align-self: center;
`
const ProductPrice = styled.p`
    display: flex;
    flex-direction: column;
    font-size: 0.8em;
    font-weight: 400;
    margin: 0;
`

const ProductActions = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin: 4px;
`

const IconButton = styled.button`
    border: none;
    background-color: #FFF;
    cursor: pointer;

    &:hover {
        color: #4b4b4b;
    }
`

function CartProductCard({product}) {
    const { addItem, updateQuantity } = useCartContext();
    return(
        <CartProductCardContainer>
            <ProductImg src={product.image} alt={product.name} />
            <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductActions>
                    <IconButton onClick={() => updateQuantity(product.id,(product.quantity+1))}><FontAwesomeIcon icon={faPlus} /></IconButton>
                    <span>{product.quantity}</span>
                    <IconButton onClick={() => updateQuantity(product.id,(product.quantity-1))}><FontAwesomeIcon icon={faMinus} /></IconButton>
                </ProductActions>           
                <ProductPrice>
                    <span>Total: R$ { String(Number(product.price * product.quantity).toFixed(2)).replace('.',',')}</span>
                </ProductPrice>
            </ProductInfo>
        </CartProductCardContainer>
    )
}

export default CartProductCard