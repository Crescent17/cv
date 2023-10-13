import {useState} from "react";
import styled from "styled-components";
import Dots from "./Dots.jsx";
import {styleVariables} from "../../util/styleVariables.js";
import SlideImage from "./SlideImage.jsx";
import GridContainer from "./GridContainer.jsx";
import Buttons from "./Buttons.jsx";

const SliderStyled = styled.section`
  position: relative;
  height: 60rem;
  max-width: 100rem;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  margin: 0 auto;
`

const TextBlock = styled.div`
  padding: 4rem;
  color: #fff;
  font-size: 3rem;
  width: 100%;
  height: 100%;
  grid-column: 2 / 3;
  background: ${styleVariables.colors.gradient};
`

const numberOfSlides = 3

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(1)

    return (
        <SliderStyled id="projects" $number={currentSlide}>
            <Buttons currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} numberOfSlides={numberOfSlides}/>
            <GridContainer number={1} currentSlide={currentSlide}>
                <SlideImage img='1.png'/>
                <TextBlock>Omnifood</TextBlock>
            </GridContainer>
            <GridContainer number={2} currentSlide={currentSlide}>
                <SlideImage img='2.png'/>
                <TextBlock>Natours</TextBlock>
            </GridContainer>
            <GridContainer number={3} currentSlide={currentSlide}>
                <SlideImage img='3.png'/>
                <TextBlock>Forkify</TextBlock>
            </GridContainer>
            <Dots numOfSlides={numberOfSlides} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}/>
        </SliderStyled>
    )
}