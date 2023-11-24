import styled from "styled-components";

const Grid = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  transition: all 1s;
  border-radius: 2rem;
  overflow: hidden;
  @media (max-width: 57rem) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`

export default function GridContainer({children}) {
    return (
        <Grid>
            {children}
        </Grid>
    )
}