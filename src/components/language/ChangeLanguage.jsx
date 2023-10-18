import styled from "styled-components";
import {useIntl} from "react-intl";

const Div = styled.div`
  color: #fff;
  column-gap: 4rem;
  font-size: 3rem;

  & a {
    transition: all 1s;

    &:hover {
      color: #da1146;
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