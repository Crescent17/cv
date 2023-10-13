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
    return `${(props.$number - props.$currentSlide) * 100}%`
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