import styled from "styled-components"

const DestaqueItems = styled.div`
    width: 100vw;
    max-width: 1440px;
    display: flex;
    height: 36px;
    align-items: center;
    gap: 35px;
`

const DestaqueLeft = styled.div`
    color: #fff;
`

const DestaqueCenter = styled.div`
    color: #000;
`

const DestaqueRight = styled.div`
    padding: 5px 15px;
    background-color: #fff;
    border-radius: 8px;
    color: #000;
`

function Destaque(){
    return (
        <DestaqueItems>
            <DestaqueLeft>primeira compra?</DestaqueLeft>
            <DestaqueCenter><strong>R$ 25 OFF</strong> A PARTIR DE <strong>R$ 200</strong></DestaqueCenter>
            <DestaqueRight><strong>PRIMEIRA25</strong></DestaqueRight>
        </DestaqueItems>
    )
}

export default Destaque