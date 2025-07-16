import styled from "styled-components"

const MenuItens = [{
    label: "Categorias",
    url: "/categorias"
},{
    label: "Tipo de pele",
    url: "/tipo-de-pele"
},{
    label: "Necessidade",
    url: "/necessidade"
},{
    label: "Ingredientes",
    url: "/ingredientes"
}]

const MenuContainer = styled.ul`
    display: flex;
    gap: 35px;
    padding: 0;
`

const MenuItem = styled.li`
    font-size: 14px;
    border-radius: 6px;
    cursor: pointer;
    
    &:hover {
        a {
            text-decoration: none;
            color: #333333;    
        }
    }
`

function Menu(){
    return (
        <MenuContainer>
            { MenuItens.map((item) => (
                <MenuItem><a href={item.url}>{item.label}</a></MenuItem>
            ))}
        </MenuContainer>
    )
}

export default Menu