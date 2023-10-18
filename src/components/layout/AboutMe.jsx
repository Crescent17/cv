import styled from "styled-components";
import Avatar from "../avatar/Avatar.jsx";
import SocialMedia from "../socialMedia/SocialMedia.jsx";
import TextContent from "../textContent/TextContent.jsx";
import AnimatedBackground from "../animatedBackground/AnimatedBackground.jsx";
import {styleVariables} from "../../util/styleVariables.js";

const AboutMeStyled = styled.section`
  max-width: 120rem;
  padding: 3rem 4rem;
  background-image: ${styleVariables.colors.mainGradient};
  border-radius: 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr auto;
  margin: 0 auto 30rem;
  font-size: 1.8rem;
  color: ${styleVariables.colors.pinkLight};
  z-index: 2;
  overflow: hidden;
  position: relative;
  @media (max-width: 86rem) {
    margin-bottom: 15rem;
  }
  @media (max-width: 70rem) {
    max-width: 100rem;
    font-size: 1.6rem;
  }
  @media (max-width: 60rem) {
    grid-template-columns: 1fr;
    max-width: 80rem;
  }
  @media (max-width: 48rem) {
    max-width: 60rem;
  }
  @media (max-width: 36rem) {
    max-width: 50rem;
  }
  @media (max-width: 36rem) {
    padding: 3rem 1.4rem;
  }
  @media (max-width: 32rem) {
    max-width: 45rem;
  }
  @media (max-width: 23rem) {
    max-width: 30rem;
  }
`

export default function AboutMe({refFn}) {
    return (
        <AboutMeStyled ref={refFn}>
            <AnimatedBackground/>
            <TextContent/>
            <Avatar/>
            <SocialMedia iconSize={70}/>
        </AboutMeStyled>
    )
}