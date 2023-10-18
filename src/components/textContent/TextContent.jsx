import styled from "styled-components";
import {FormattedMessage} from "react-intl";

const TextContentStyled = styled.div`
  z-index: 2;
  grid-row: 1 / -1;
  align-self: center;
  @media(max-width: 60rem) {
    grid-row: 2 / 3;
  }
`

const H2Styled = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 1rem;
`

const Paragraph = styled.p`
  margin-bottom: 2rem;
`

export default function TextContent() {
    return (
        <TextContentStyled>
            <H2Styled><FormattedMessage id="technical-skills"></FormattedMessage></H2Styled>
            <Paragraph><FormattedMessage id="technical-skills-description"></FormattedMessage></Paragraph>
            <H2Styled><FormattedMessage id="languages"></FormattedMessage></H2Styled>
            <Paragraph><FormattedMessage id="languages-description"></FormattedMessage></Paragraph>
            <H2Styled><FormattedMessage id="personal-info"></FormattedMessage></H2Styled>
            <Paragraph><FormattedMessage id="personal-info-description"></FormattedMessage></Paragraph>
        </TextContentStyled>
    )
}