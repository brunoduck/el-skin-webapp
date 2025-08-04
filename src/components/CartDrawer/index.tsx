import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components"
import { useCartContext } from '../../context/CartContext'
import CartProductCard from './CartProductCard'

const AppShadow = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(194, 194, 194, 0.8);
    transition: all 1s ease;
`

const Drawer = styled.div`
    width: 320px;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #fff;
    box-shadow: -15px 10px 16px -6px rgba(128, 128, 128, 0.58);
    -webkit-box-shadow: -15px 10px 16px -6px rgba(128, 128, 128, 0.58);
    -moz-box-shadow: -15px 10px 16px -6px rgba(128, 128, 128, 0.58);
    transition: all 1s ease;
`

const DrawerTitleContainer = styled.div`
    width: 288px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
`

const DrawerTitle = styled.p`
    
`

const CloseButton = styled.button`
    border: none;
    background-color: #FFF;
    cursor: pointer;

    &:hover {
        color: #4b4b4b;
    }
`

const DrawerProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 16px;

    p {
        margin: 0;
    }
`

function CartDrawer({isOpen, onClose}) {
    const { addItem, items, getTotalItems, totalPrice } = useCartContext();

    if (!isOpen) return null;
    
    
    return (
        <AppShadow>
            <Drawer>
                <DrawerTitleContainer>
                    <DrawerTitle>Carrinho</DrawerTitle>
                    <CloseButton onClick={onClose}>
                        <FontAwesomeIcon icon={faXmark} />
                    </CloseButton>
                </DrawerTitleContainer>
                <DrawerProductsContainer>
                    { items.map(product => (
                        <CartProductCard key={product.id} product={product}/>
                    ))}
                    <p>Itens: { getTotalItems() }</p>
                    <p>Total: R$ { totalPrice }</p>
                </DrawerProductsContainer>
            </Drawer>
        </AppShadow>
    )
}

export default CartDrawer