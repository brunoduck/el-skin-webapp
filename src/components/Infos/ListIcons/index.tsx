import styled from "styled-components";
import { icons } from "./icons";

const ListIconsContainer = styled.section`
  width: 100vw;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  gap: 45px;

  a:hover {
    opacity: 0.8;
  }
`;

let a = 0

function ListIcons() {
  return (
    <ListIconsContainer>
      {icons.map(icon => (
        <a href={icon.url} key={icon.name}><img alt={`${icon.name}`} src={`/assets/icones/footer/${icon.name}.png`}/></a>
      ))}
    </ListIconsContainer>
  );
}

export default ListIcons;
