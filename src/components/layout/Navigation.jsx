import styled from "styled-components";
import {styleVariables} from "../../util/styleVariables.js";
import {FormattedMessage} from "react-intl";

const Nav = styled.nav`
  background-image: ${styleVariables.colors.gradient};
  margin: 0 auto 10rem;
  padding: 0 5rem;
  width: 100%;
  height: 8rem;
  border-radius: 2rem;
  display: flex;
  color: #ffdeeb;
  font-family: 'Poiret One', sans-serif;
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
  margin-right: 2rem;
`

export default function Navigation() {
    return (
        <Nav>
            <Ul>
                <Li>
                    <Img src="/img/Logo.png" alt="Crescent dev logo"/>
                    CRESCENT DEV
                </Li>
                <Li><a href="#tech"><FormattedMessage id="technologies"/></a></Li>
                <Li><a href="#projects"><FormattedMessage id="projects"/></a></Li>
                <Li><a href="#"><FormattedMessage id="about-me"/></a></Li>
            </Ul>
        </Nav>
    )
}