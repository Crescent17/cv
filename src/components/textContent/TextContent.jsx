import styled from "styled-components";

const TextContentStyled = styled.div`
  z-index: 2;
  grid-row: 1 / -1;
  align-self: center;
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
            <H2Styled>Technical skills🔧</H2Styled>
            <Paragraph>I am a Frontend Developer, who creates interactive web applications using the following
                tools: HTML,
                CSS, JS, React and Redux. In past I used to work in ITechArt company as a Java Backend Developer
                using Spring Boot, creating API servers with microservice architecture.</Paragraph>
            <H2Styled>Languages🗣️</H2Styled>
            <Paragraph>
                My native language is Russian, but I am also able to speak Italian (A2) and English (~B2) good
                enough as it seems to me :)</Paragraph>
            <H2Styled>A little bit about me🧑🏻</H2Styled>
            <Paragraph>I am 22 years old, I live in Belarus and I really like coding and learn it every day. In
                my spare time I like editing photos in Photoshop and videos in Premiere Pro, also I like
                watching movies and TV shows with my girlfriend, hanging out with my friends and have a great
                time. I am an outgoing, kind and very polite person. Also I am very persistent, so that if I
                have some problems I promise myself that I will definitely find the way to fix it.
                I will be really glad to help you with all I can😊</Paragraph>
        </TextContentStyled>
    )
}