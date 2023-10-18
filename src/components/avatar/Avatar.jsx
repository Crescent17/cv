import styled from "styled-components";
import {FormattedMessage} from "react-intl";

const Figure = styled.figure`
  @media(max-width: 60rem) {
    justify-self: center;
    margin-bottom: 2rem;
  }
`

const Img = styled.img`
  justify-self: end;
  width: 40rem;
  animation: morph 8s ease-in-out infinite;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  transition: all 1s ease-in-out;
  border: 5px ridge #495057;
  z-index: 5;

  @keyframes morph {
    0% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      background: linear-gradient(45deg, var(--primary) 0%, var(--secondary) 100%);
    }

    50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
      background: linear-gradient(45deg, var(--third) 0%, var(--secondary) 100%);
    }

    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      background: linear-gradient(45deg, var(--primary) 0%, var(--secondary) 100%);
    }
  }
  @media(max-width: 74rem) {
    width: 35rem;
  }
  @media(max-width: 70rem) {
    width: 30rem;
  }
  @media(max-width: 60rem) {
    grid-row: 1 / 2;
  }
`

const FigCaption = styled.figcaption`
  text-align: center;
  text-shadow: -3px 4px 3px black;
  font-size: 3rem;
`

export default function Avatar() {
    return (
        <Figure>
            <Img src="/img/avatar.jpg" alt="My profile photo"/>
            <FigCaption><FormattedMessage id="name"/></FigCaption>
        </Figure>
    )
}