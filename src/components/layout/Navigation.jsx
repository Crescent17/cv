import styled from "styled-components";
import {styleVariables} from "../../util/styleVariables.js";
import {FormattedMessage} from "react-intl";

const Nav = styled.nav`
  background-image: ${styleVariables.colors.gradient};
  margin: 3rem auto 10rem;
  padding: 5rem;
  width: ${props => props.$headerInView || props.$headerInView === undefined ? '70%' : '100%'};
  max-height: 4rem;
  border-radius: ${props => props.$headerInView || props.$headerInView === undefined ? '2rem' : 0};
  display: flex;
  color: #ffdeeb;
  font-family: 'Poiret One', sans-serif;
  z-index: 100;
  position: ${props => props.$headerInView || 'sticky'};
  top: ${props => props.$headerInView || 0};
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
  letter-spacing: .1rem;
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

export default function Navigation({headerInView}) {
    console.log(headerInView)
    return (
        <Nav $headerInView={headerInView}>
            <Ul>
                <Li>
                    <Img src="/img/Logo.png" alt="Crescent dev logo"/>
                    CRESCENT DEV
                </Li>
                <Li><a href="#tech"><FormattedMessage id="technologies"/></a></Li>
                <Li><a href="#projects"><FormattedMessage id="projects"/></a></Li>
                <Li><a href="#footer"><FormattedMessage id="contact-me"/></a></Li>
            </Ul>
        </Nav>
    )
}