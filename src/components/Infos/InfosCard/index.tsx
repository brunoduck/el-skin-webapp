import styled from "styled-components"

const FooterCardContainer = styled.div`
    padding: 20px;
`

const Titulo = styled.p`
    text-decoration: underline;
    margin: 5px;
    font-size: 18px;
`

const Link = styled.p`
    margin: 5px;
    font-size: 16px;
`

function FooterCard({titulo,links}){
    return (
        <FooterCardContainer>
            <Titulo>{titulo}</Titulo>
            {links.map(link => (
                <Link><small>- <a href={link.url}>{link.texto}</a></small></Link>
            ))}
        </FooterCardContainer>
   )
}

export default FooterCard