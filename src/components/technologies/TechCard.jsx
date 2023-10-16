import styled from "styled-components";

const TechCardStyled = styled.div`
  position: relative;
  max-width: 100%;
  padding: 3rem 2rem;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/img/Card Background.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: -2px 5px 2px black;
  transition: all .2s;
  overflow: hidden;

  &:hover {
    box-shadow: -2px 5px 5px black;
    transform: translateY(-2rem);
  }
`

export function TechCard({children}) {
    return (
        <TechCardStyled>
            {children}
        </TechCardStyled>
    )
}