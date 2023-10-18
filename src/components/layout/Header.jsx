import styled from "styled-components";
import {styleVariables} from "../../util/styleVariables.js";
import Navigation from "./Navigation.jsx";
import {useRef, useState} from "react";
import Logo from "../logo/LogoContainer.jsx";

const HeaderStyled = styled.header`
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
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: .1rem;
  justify-content: space-between;

  @media (max-width: 95rem) {
    font-size: 2.5rem;
  }
  @media (max-width: 86rem) {
    font-size: 2rem;
  }
  @media (max-width: 74rem) {
    padding: 5rem 1.6rem;
  }
  @media (max-width: 57rem) {
    width: 100%;
    border-radius: 0;
    margin: 0 auto 5rem;
  }
`

const OpenMenu = styled.svg`
  display: none;
  cursor: pointer;
  fill: #fff;
  width: 4rem;
  height: 4rem;
  align-self: center;
  z-index: ${props => props.$menuIsOpened ? 0 : 500};
  @media (max-width: 46rem) {
    display: inline-block;
    margin-right: 1rem;
    position: ${props => props.$menuIsOpened ? 'sticky' : 'static'};
  }
  @media (max-width: 23rem) {
    margin-right: 0;
  }
`

export default function Header({headerInView, setLocale, techSection, projectSection, footer}) {
    const navElement = useRef()
    const [menuIsOpened, setMenuIsOpened] = useState(false)
    return (
        <HeaderStyled $headerInView={headerInView} ref={navElement}>
            <Logo setLocale={setLocale}/>
            <Navigation navElement={navElement} techSection={techSection} projectSection={projectSection}
                        footer={footer} menuIsOpened={menuIsOpened} setMenuIsOpened={setMenuIsOpened}/>
                <OpenMenu $menuIsOpened={menuIsOpened} onClick={() => setMenuIsOpened(!menuIsOpened)}
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px" width="100" height="100"
                      viewBox="0 0 50 50">
                    <path
                        d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
                </OpenMenu>
        </HeaderStyled>
    )
}