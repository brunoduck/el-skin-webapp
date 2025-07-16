import Menu from "../Menu"
import styled from "styled-components"
import NavBarPromo from "../NavBarPromo"

const NavBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    max-width: 1440px;
    grid-area: "navbar";

`

function NavBar(){
    return (
        <NavBarContainer>
            <Menu/>
            <NavBarPromo />
        </NavBarContainer>
    )
}

export default NavBar