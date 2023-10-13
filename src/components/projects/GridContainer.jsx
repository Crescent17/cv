import styled from "styled-components";

const Grid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  transition: all 1s;
  transform: translateX(${props => {
    if (props.$number === 1 && props.$currentSlide === 1) return "0"
    if (props.$number === 1 && props.$currentSlide === 2) return "-100%"
    if (props.$number === 1 && props.$currentSlide === 3) return "-200%"
    if (props.$number === 2 && props.$currentSlide === 1) return "100%"
    if (props.$number === 2 && props.$currentSlide === 2) return "0"
    if (props.$number === 2 && props.$currentSlide === 3) return "-100%"
    if (props.$number === 3 && props.$currentSlide === 1) return "200%"
    if (props.$number === 3 && props.$currentSlide === 2) return "100%"
    if (props.$number === 3 && props.$currentSlide === 3) return "0"
  }});
`

export default function GridContainer({number, currentSlide, children}) {
    return (
        <Grid $number={number} $currentSlide={currentSlide}>
            Hello
            {children}
        </Grid>
    )
}