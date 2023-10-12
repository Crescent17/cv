import styled from "styled-components";
import Avatar from "../avatar/Avatar.jsx";
import SocialMedia from "../socialMedia/SocialMedia.jsx";
import TextContent from "../textContent/TextContent.jsx";
import AnimatedBackground from "../animatedBackground/AnimatedBackground.jsx";

const HeaderStyled = styled.main`
  max-width: 120rem;
  padding: 3rem 4rem;
  background-image: linear-gradient(225deg, #520088 0%, #106b9f 100%);
  border-radius: 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr auto;
  margin: 0 auto 15rem;
  font-size: 1.8rem;
  color: #ffdeeb;
  z-index: 2;
  overflow: hidden;
  position: relative;
`

export default function Header() {
    return (
        <HeaderStyled>
            <AnimatedBackground/>
            <TextContent/>
            <Avatar/>
            <SocialMedia/>
        </HeaderStyled>
    )
}