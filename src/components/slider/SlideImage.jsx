import styled from "styled-components";

const Slide = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 1s;
  grid-column: 1 / 2;
  background: url("/img/${props => props.$img}") no-repeat;
  background-size: cover;
  @media (max-width: 57rem) {
    grid-row: 1 / 2;
    grid-column: 1;
    background-size: cover;
    background-position: center;
  }
`

export default function SlideImage({img}) {
    return (
        <Slide $img={img}></Slide>
    )
}