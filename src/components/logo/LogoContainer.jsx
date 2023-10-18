import styled from "styled-components";
import ChangeLanguage from "../language/ChangeLanguage.jsx";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const LogoImg = styled.img`
  height: 10rem;
  margin-right: .5rem;
  @media (max-width: 23rem) {
    height: 7rem;
  }
`

const Brand = styled.p`
  margin-right: 2rem;
`
export default function Logo({setLocale}) {
    return (
        <LogoContainer>
        <LogoImg src="/img/Logo.png" alt="Crescent dev logo"/>
        <Brand>CRESCENT DEV</Brand>
        <ChangeLanguage setLocale={setLocale}/>
    </LogoContainer>
    )
}