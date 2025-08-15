import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons'

import { useState } from "react";
import CartDrawer from "../CartDrawer";
import { useCartContext } from "../../context/CartContext";

const HeaderContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
  padding: 16px 0;
  grid-area: "header";
  max-width: 1440px;
  width: 100vw;
`;

const Logo = styled.div`
  width: 225px;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 600;
  cursor: default;
`;

const Search = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

`;

const Options = styled.div`
  width: calc(55% - 225px);
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    border: none;
    height: 40px;
    width: 40px;
    cursor: pointer;
    background-color: transparent;
    border-radius: 50%;
    font-size: 16px;

    &:hover {
      background-color: #f2f2f2;
    }
  }
`;

const ButtonSearch = styled.button`
  background-color: #f2f2f2;
  padding: 15px 20px;
  border-radius: 0 10px 10px 0;
  border:none;
  height: 45px;
  cursor: pointer;

  img {
    height: 17px;
  }

  &:hover{
    background-color: #e1e1e1;
  }
`

const BadgeTotalItems = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 16px;
  background-color: red;
  font-size: 12px;
  color: white;
  text-align: center;
  position: absolute;
  top: 24px;
  
`

function Header() {
  const [searchValue,setSearchValue] = useState('')
  const [isDrawerOpen,setIsDrawerOpen] = useState(false)
  const { getTotalItems } = useCartContext();

  function handleOnChange(e){
    setSearchValue(e.target.value)
  }

  function handleClick(){
    console.log(searchValue)
  }

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true)
  }

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false)
  }

  return (
    <HeaderContainer>
      <Logo>AL SKIN</Logo>
      <Search>
        <input type="search" placeholder="O que você está procurando?" onChange={(e) => handleOnChange(e)}/>
        <ButtonSearch type="button" onClick={(e) => handleClick()}><FontAwesomeIcon icon={faMagnifyingGlass} /></ButtonSearch>
      </Search>
      <Options>
        <button onClick={handleOpenDrawer}><FontAwesomeIcon icon={faBagShopping} /></button>
        <BadgeTotalItems>{ getTotalItems() }</BadgeTotalItems>
      </Options>
      <CartDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}/>
    </HeaderContainer>
  );
}

export default Header;
