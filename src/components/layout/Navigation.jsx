import styled from "styled-components";
import {styleVariables} from "../../util/styleVariables.js";

const Nav = styled.nav`
  background-image: ${styleVariables.colors.gradient};
  margin: 0 auto 10rem;
  padding: 0 5rem;
  width: 100%;
  height: 8rem;
  border-radius: 2rem;
  display: flex;
  color: #ffdeeb;
  font-family: 'Dancing Script', cursive;
`

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: end;
  gap: 7rem;
  align-items: center;
  width: 100%;
  font-weight: bold;
  font-size: 3rem;
`

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: .2rem;
  font-weight: 600;

  &:first-child {
    font-weight: 400;
    margin-right: auto;
  }

  & a {
    transition: all 1s;
  }

  & a:hover {
    color: #da1146;
  }
`

const Img = styled.img`
  height: 10rem;
  animation: pulse 4s linear infinite;
  margin-right: 2rem;

  @keyframes pulse {
    0% {
      transform: scale(1);
      filter: drop-shadow(-3px 3px 1px black);
    }

    50% {
      transform: scale(1.2);
      filter: drop-shadow(-3px 3px 3px black);
    }

    100% {
      transform: scale(1);
      filter: drop-shadow(-3px 3px 1px black);
    }
  }
`

export default function Navigation() {
    return (
        <Nav>
            <Ul>
                <Li>
                    <Img src="../../../public/img/Logo.png"/>
                    CRESCENT DEV
                </Li>
                <Li><a href="#tech">Technologies</a></Li>
                <Li><a href="#">Projects</a></Li>
                <Li><a href="#">About me</a></Li>
            </Ul>
        </Nav>
    )
}