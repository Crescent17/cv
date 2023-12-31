import styled from "styled-components";
import {useIntl} from "react-intl";
import {styleVariables} from "../../util/styleVariables.js";

const Div = styled.div`
  color: ${styleVariables.colors.white};
  column-gap: 4rem;
  font-size: 3rem;

  & a {
    transition: all 1s;

    &:hover {
      color: ${styleVariables.colors.hover};
    }
  }

  @media (max-width: 74rem) {
    column-gap: 2rem;
  }
`

const Img = styled.img`
  width: 4rem;
  height: 4rem;
  transition: all .2s;

  &:hover {
    transform: translateY(-10%);
  }
  @media (max-width: 23rem) {
    width: 2.5rem;
    height: 2.5rem;
  }
`

export default function ChangeLanguage({setLocale}) {
    const intl = useIntl()
    const currentLocale = intl.locale
    return (
        <Div>
            {currentLocale === 'ru' ? <a onClick={(e) => {
                e.preventDefault()
                setLocale('en')
            }} href='#'>
                <Img src='/img/English%20Language.svg' alt="Choose english language"/>
            </a> : <a onClick={(e) => {
                e.preventDefault()
                setLocale('ru')
            }} href='#'>
                <Img src='/img/Russian%20Language.svg' alt="Choose russian language"/>
            </a>}
        </Div>
    )
}