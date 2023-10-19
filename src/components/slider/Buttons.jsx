import styled from "styled-components";
import {styleVariables} from "../../util/styleVariables.js";
import {useSwiper} from "swiper/react";

const Button = styled.button`
  display: flex;
  background: ${styleVariables.colors.black};
  color: ${styleVariables.colors.white};
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  border: none;
  border-radius: 100px;
  font-size: 2rem;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  right: 2rem;
  z-index: 1;
  transition: all .2s;
  box-shadow: -3px 1px 3px ${styleVariables.colors.black};
  @media(max-width: 25rem) {
    right: 1rem;
  }

  &:first-child {
    left: 2rem;
    @media(max-width: 25rem) {
      left: 1rem;
    }
  }

  &:hover {
    color: ${styleVariables.colors.hover};
    background-color: ${styleVariables.colors.darkGrey};
  }

  &:active {
    box-shadow: -3px 1px 2px ${styleVariables.colors.black};
    transform: translateY(-43%);
  }
`

export default function Buttons({currentSlide, setCurrentSlide, numberOfSlides}) {
    const swiper = useSwiper()

    function handleNextSlide() {
        if (currentSlide === numberOfSlides) setCurrentSlide(1)
        else setCurrentSlide(currentSlide => currentSlide + 1)
    }

    function handlePreviousSlide() {
        if (currentSlide === 1) setCurrentSlide(numberOfSlides)
        else setCurrentSlide(currentSlide => currentSlide - 1)
    }

    return (
        <div>
            <Button onClick={() => swiper.slidePrev()}>
                &#10094;
            </Button>
            <Button onClick={() => swiper.slideNext()}>
                &#10095;
            </Button>
        </div>
    )
}