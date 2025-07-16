import styled from "styled-components";
import ListIcons from "./ListIcons";
import InfosCard from "./InfosCard";

const ALSKINInfos = styled.section`
  background-color: #f5f5f5;
  width: 100vw;
  padding: 70px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Cards = styled.div`
    padding: 10px;
    display: flex;
    gap: 45px;
`

function Footer() {
  return (
    <ALSKINInfos>
      <ListIcons />
      <Cards>
        <InfosCard
          titulo={"Sobre a AL SKIN"}
          links={[
            {
              texto: "quem somos",
              url: "/sobre",
            },{
              texto: "time AL SKIN",
              url: "/time",
            },{
              texto: "carreiras",
              url: "/carreiras",
            }
          ]}
        />
        <InfosCard
          titulo={"Loja AL SKIN"}
          links={[
            {
              texto: "lojas físicas",
              url: "/lojas-fisicas",
            },{
              texto: "devolução",
              url: "/devolucao",
            },
          ]}
        />
        <InfosCard
          titulo={"Atendimento"}
          links={[
            {
              texto: "oi@alskin.com.br",
              url: "mailto:oi@alskin.com.br",
            },{
              texto: "fale conosco",
              url: "/fale-conosco",
            },{
              texto: "ajuda",
              url: "/ajuda",
            }
          ]}
        />
        <InfosCard
          titulo={"Blog AL SKIN"}
          links={[
            {
              texto: "Minha pele",
              url: "/minha-pele",
            },{
              texto: "Ingredientes",
              url: "/ingredientes",
            }
          ]}
        />
      </Cards>
    </ALSKINInfos>
  );
}

export default Footer;
