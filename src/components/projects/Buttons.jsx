import styled from "styled-components";

const Button = styled.a`
  display: flex;
  background: #000;
  color: #fff;
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

export default function Buttons({currentSlide, setCurrentSlide, numberOfSlides}) {
    function handleNextSlide() {
        if (currentSlide === 3) setCurrentSlide(1)
        else setCurrentSlide(currentSlide => currentSlide + 1)
    }

    function handlePreviousSlide() {
        if (currentSlide === 1) setCurrentSlide(numberOfSlides)
        else setCurrentSlide(currentSlide => currentSlide - 1)
    }
    return (
        <>
            <Button onClick={() => handlePreviousSlide()}>
                &#10094;
            </Button>
            <Button onClick={() => handleNextSlide()}>
                &#10095;
            </Button>
        </>
    )
}