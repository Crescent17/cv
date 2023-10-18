import styled from "styled-components";
import {FormattedMessage} from "react-intl";
import {styleVariables} from "../../util/styleVariables.js";

const Nav = styled.nav`
  display: flex;
  transition: all 2s;
  background: ${styleVariables.colors.gradient};
  @media (max-width: 46rem) {
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    position: fixed;
    align-items: center;
    z-index: 50;
    display: ${props => props.$menuIsOpened ? 'flex' : 'none'};
    font-size: 4rem;
  }
`

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: end;
  gap: 7rem;
  align-items: center;
  width: 100%;
  @media (max-width: 74rem) {
    gap: 4rem;
  }
  @media (max-width: 46rem) {
    flex-direction: column;
  }
`

const Li = styled.li`
  font-weight: 400;

  & p {
    cursor: pointer;
    transition: all 1s;

    &:hover {
      color: #da1146;
    }
  }
`

const CloseMenu = styled.svg`
  display: none;
  cursor: pointer;
  fill: #fff;
  width: 4rem;
  height: 4rem;
  align-self: center;
  z-index: 20;
  @media (max-width: 46rem) {
    display: block;
    margin-right: 1rem;
    position: absolute;
    top: 3rem;
    right: 1.5rem;
  }
  @media (max-width: 23rem) {
    right: .5rem;
  }
`


function scrollTo(offSetOfElement, scrollToElement) {
    window.scrollTo({
        top: scrollToElement.current.offsetTop - offSetOfElement.current.offsetHeight,
        behavior: "smooth"
    })
}

export default function Navigation({navElement, techSection, projectSection, footer, menuIsOpened, setMenuIsOpened}) {
    return (
        <Nav $menuIsOpened={menuIsOpened}>
            <Ul>
                <Li><p onClick={() => {
                    setMenuIsOpened(false)
                    scrollTo(navElement, techSection)
                }}><FormattedMessage id="technologies"/>
                </p>
                </Li>
                <Li><p onClick={() => {
                    setMenuIsOpened(false)
                    scrollTo(navElement, projectSection)
                }}><FormattedMessage id="projects"/>
                </p>
                </Li>
                <Li><p onClick={() => {
                    setMenuIsOpened(false)
                    scrollTo(navElement, footer)
                }}><FormattedMessage id="contact-me"/></p></Li>
            </Ul>
            {menuIsOpened && <CloseMenu $menuIsOpened={menuIsOpened} onClick={() => setMenuIsOpened(false)}
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px" width="50" height="50" viewBox="0 0 50 50">
                <path
                    d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
            </CloseMenu>}
        </Nav>
    )
}