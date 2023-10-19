import {Swiper, SwiperSlide} from "swiper/react";
import styled from "styled-components";
import 'swiper/css'
import 'swiper/css/pagination'
import {styleVariables} from "../../util/styleVariables.js";
import {FormattedMessage, useIntl} from "react-intl";
import translations from "../../util/translations.json"
import '../../util/swiper.scss'
import {Pagination} from "swiper/modules";
import GridContainer from "./GridContainer.jsx";
import SlideImage from "./SlideImage.jsx";
import Buttons from "./Buttons.jsx";

const SwiperContainer = styled.div`
  position: relative;
  width: 77%;
  margin: 0 auto 20rem;
  @media (max-width: 53rem) {
    width: 80%;
  }
  @media (max-width: 36rem) {
    width: 100%;
  }
`

const TextBlock = styled.div`
  padding: 4rem;
  color: ${styleVariables.colors.white};
  font-size: 3rem;
  grid-column: 2 / 3;
  background: ${styleVariables.colors.mainGradient};
  display: flex;
  flex-direction: column;
  min-height: 40rem;
  @media (max-width: 95rem) {
    font-size: 2.5rem;
  }
  @media (max-width: 57rem) {
    grid-row: 2 / 3;
  }
`

const Heading = styled.h2`
  text-align: center;
  grid-column: 1 / -1;
  justify-self: center;
  color: ${styleVariables.colors.white};
  font-size: 3.4rem;
  text-shadow: -4px 4px 1px ${styleVariables.colors.black};
  transition: all .2s;
  letter-spacing: 10px;
  z-index: 1;
  text-transform: uppercase;
  margin-bottom: 2rem;

  &:hover {
    transform: skewX(10deg) scale(1.1);
  }

  @media (max-width: 57rem) {
    font-size: 2.6rem;
  }
  @media (max-width: 27rem) {
    font-size: 1.4rem;
  }
`

const Description = styled.p`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  @media (max-width: 57rem) {
    font-size: 1.6rem;
  }
  @media (max-width: 57rem) {
    font-size: 1.4rem;
  }
`

const Button = styled.a`
  display: inline-block;
  background-color: ${styleVariables.colors.black};
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
    color: ${styleVariables.colors.hover};
    border: 1px solid ${styleVariables.colors.white};
    background-color: transparent;
    transform: translateY(-.5rem);
  }

  @media (max-width: 57rem) {
    font-size: 1.6rem;
    margin-bottom: 5rem;
  }
`


export default function Slider({projectSection}) {
    const locale = useIntl().locale
    return (
        <SwiperContainer ref={projectSection}>
            <Swiper spaceBetween={200} slidesPerView={1} grabCursor={true} modules={[Pagination]} pagination={{
                clickable: true,
            }}>
                {translations[locale]["slider-projects"].map((project, index) =>
                    <SwiperSlide key={index}>
                        <GridContainer>
                            <SlideImage img={`${index + 1}.jpg`}/>
                            <TextBlock>
                                <Heading>{project.title}</Heading>
                                <Description>{project.description}</Description>
                                <Description>{project.stack}</Description>
                                <Button target="_blank" href={project.link}><FormattedMessage
                                    id="button-text"/></Button>
                            </TextBlock>
                        </GridContainer>
                    </SwiperSlide>)}
                <Buttons/>
            </Swiper>
        </SwiperContainer>
    )
}