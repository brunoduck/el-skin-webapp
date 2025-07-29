import styled from "styled-components"
import ProductsCard from "./ProductsCard"
import { http } from "../../http"
import { useEffect, useState } from "react"

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
    const [loading,setLoading] = useState(true)
    const [products,setProducts] = useState([])

    useEffect(() => {
        http.get('products')
        .then((response) =>{
            console.log(response)
            setLoading(false)
            setProducts(response.data)
        })
    },[])

    return (
        <ProductsListContainer>
            <Titulo>nossos queridinhos estão aqui</Titulo>
            { loading && <p>Carregando...</p> }
            { !loading && (<ProductsListItems>
                    { products.map(product => (
                        <ProductsCard key={product.id} product={product}/>
                    ))}
                </ProductsListItems>
            )}
        </ProductsListContainer>
    )
}

export default ProductsList