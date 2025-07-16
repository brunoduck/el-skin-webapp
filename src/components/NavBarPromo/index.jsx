import styled from "styled-components"

const NavBarPromoContainer = styled.p`
    color: red;
    font-weight: 700;
    cursor: default;
`

function NavBarPromo(){
    return (
        <NavBarPromoContainer>
            Kits até 50% off
        </NavBarPromoContainer>
    )
}

export default NavBarPromo