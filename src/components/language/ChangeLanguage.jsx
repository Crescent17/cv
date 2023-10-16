import styled from "styled-components";

const Div = styled.div`
  position: absolute;
  display: flex;
  color: #fff;
  column-gap: 4rem;
  font-size: 3rem;
  top: 3rem;
  transform: translateY(50%);
  right: 5rem;

  & a {
    transition: all 1s;

    &:hover {
      color: #da1146;
    }
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
    return (
        <Div>
            <a onClick={(e) => {
                e.preventDefault()
                setLocale('ru')
            }} href='#'>
                <Img src='/img/Russian%20Language.svg' alt="Choose russian language"/>
            </a>
            <a onClick={(e) => {
                e.preventDefault()
                setLocale('en')
            }} href='#'>
                <Img src='/img/English%20Language.svg' alt="Choose english language"/>
            </a>
        </Div>
    )
}