import styled from "styled-components";

const DotsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
`

const Dot = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 500px;
  cursor: pointer;
  border: 1px solid #495057;
  top: 0;
  left: 0;
  transition: all .5s;

  &:nth-child(${props => props.$currentslide}) {
    width: 3.5rem;
    height: 3.5rem;
    background-color: #74c0fc;
  }
`

export default function Dots({numOfSlides, setCurrentSlide, currentSlide}) {
    return (
        <DotsContainer>
            {[...Array(numOfSlides)].map((dot, index) => <Dot $currentslide={currentSlide}
                                                              onClick={() => setCurrentSlide(index + 1)} key={index}/>)}
        </DotsContainer>
    )
}