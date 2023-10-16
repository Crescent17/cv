import {useState} from "react";
import styled from "styled-components";
import Dots from "./Dots.jsx";
import {styleVariables} from "../../util/styleVariables.js";
import SlideImage from "./SlideImage.jsx";
import GridContainer from "./GridContainer.jsx";
import Buttons from "./Buttons.jsx";
import translations from "../../util/translations.json"
import {FormattedMessage, useIntl} from "react-intl";

const SliderStyled = styled.section`
  position: relative;
  height: 60rem;
  max-width: 100rem;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  margin: 0 auto 30rem;
`

const TextBlock = styled.div`
  padding: 4rem;
  color: #fff;
  font-size: 3rem;
  width: 100%;
  height: 100%;
  grid-column: 2 / 3;
  background: ${styleVariables.colors.gradient};
  display: flex;
  flex-direction: column;
`

const Heading = styled.h2`
  text-align: center;
  grid-column: 1 / -1;
  justify-self: center;
  color: #fff;
  font-size: 4rem;
  text-shadow: -4px 4px 1px black;
  transition: all .2s;
  letter-spacing: 10px;
  z-index: 1;
  text-transform: uppercase;
  margin-bottom: 2rem;

  &:hover {
    transform: skewX(10deg) scale(1.1);
  }
`

const Description = styled.p`
  font-size: 2.4rem;
`

const Button = styled.a`
  display: inline-block;
  background-color: #000;
  color: inherit;
  cursor: pointer;
  padding: 1rem 3rem;
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: .9rem;
  align-self: center;
  justify-self: end;
  margin-top: auto;
  margin-bottom: 10rem;
  font-size: 3rem;
  transition: all .2s;
  border: 1px solid transparent;

  &:hover {
    color: #da1146;
    border: 1px solid #fff;
    background-color: transparent;
    transform: translateY(-.5rem);
  }
`

const numberOfSlides = translations.en["slider-projects"].length

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(1)
    const locale = useIntl().locale

    return (
        <SliderStyled id="projects" $number={currentSlide}>
            <Buttons currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} numberOfSlides={numberOfSlides}/>
            {translations[locale]["slider-projects"].map((project, index) => <GridContainer key={index}
                                                                                            number={index + 1}
                                                                                            currentSlide={currentSlide}>
                <SlideImage img={`${index + 1}.png`}/>
                <TextBlock>
                    <Heading>{project.title}</Heading>
                    <Description>{project.description}</Description>
                    <Button target="_blank" href={project.link}><FormattedMessage id="button-text"/></Button>
                </TextBlock>
            </GridContainer>)}
            <Dots numOfSlides={numberOfSlides} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}/>
        </SliderStyled>
    )
}