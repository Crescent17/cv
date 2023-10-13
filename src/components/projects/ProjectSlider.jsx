import {useState} from "react";
import styled from "styled-components";
import Dots from "./Dots.jsx";

const Slider = styled.section`
  position: relative;
  height: 70rem;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
`

const Button = styled.a`
  display: flex;
  background: #000;
  color: #fff;
  cursor: pointer;
  width: 8rem;
  height: 8rem;
  border: none;
  border-radius: 100px;
  font-size: 3rem;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  right: 2rem;
  z-index: 1;
  transition: all .2s;
  box-shadow: -3px 1px 3px black;

  &:first-child {
    left: 2rem;
  }

  &:hover {
    background-color: #212529;
  }

  &:active {
    box-shadow: -3px 1px 2px black;
    transform: translateY(-43%);
  }
`

const Slide = styled.div`
  height: 70rem;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 1s;
`

const SlideFirst = styled(Slide)`
  background: url("/img/1.png");
  background-size: cover;
  transform: translateX(${props => props.$number === 1 ? 1 : props.$number === 2 ? '-100%' : '-200%'});
`

const SlideSecond = styled(Slide)`
  background: url("/img/2.png");
  background-size: cover;
  transform: translateX(${props => props.$number === 2 ? 1 : props.$number === 1 ? '100%' : '-100%'});
`

const SlideThird = styled(Slide)`
  background: url("/img/3.png");
  background-size: cover;
  transform: translateX(${props => props.$number === 3 ? 1 : props.$number === 1 ? '200%' : '100%'});
`

const numberOfSlides = 3

export default function ProjectSlider() {
    const [currentSlide, setCurrentSlide] = useState(1)

    function handleNextSlide() {
        if (currentSlide === 3) setCurrentSlide(1)
        else setCurrentSlide(currentSlide => currentSlide + 1)
    }

    function handlePreviousSlide() {
        if (currentSlide === 1) setCurrentSlide(numberOfSlides)
        else setCurrentSlide(currentSlide => currentSlide - 1)
    }

    return (
        <Slider id="projects" $number={currentSlide}>
            <Button onClick={() => handlePreviousSlide()}>
                &#10094;
            </Button>
            <SlideFirst $number={currentSlide}/>
            <SlideSecond $number={currentSlide}/>
            <SlideThird $number={currentSlide}/>
            <Button onClick={() => handleNextSlide()}>
                &#10095;
            </Button>
            <Dots numOfSlides={numberOfSlides} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}/>
        </Slider>
    )
}