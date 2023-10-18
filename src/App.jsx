import GlobalStyle from "./util/globalStyles.js";
import AboutMe from "./components/layout/AboutMe.jsx";
import Technologies from "./components/technologies/Technologies.jsx";
import Slider from "./components/slider/Slider.jsx";
import {IntlProvider} from "react-intl";
import {useRef, useState} from "react";
import translations from './util/translations.json'
import Footer from "./components/layout/Footer.jsx";
import {useInView} from "react-intersection-observer";
import styled from "styled-components";
import Header from "./components/layout/Header.jsx";

const Main = styled.main`
  padding: 0 3rem;
`

export default function App() {
    const [locale, setLocale] = useState('en')
    const messages = translations[locale]
    const {ref, inView, entry} = useInView({
        threshold: 0,
    });
    const techSection = useRef();
    const projectSection = useRef();
    const footer = useRef();
    return (
        <>
            <GlobalStyle/>
            <IntlProvider locale={locale} messages={messages}>
                <Header headerInView={entry?.isIntersecting} setLocale={setLocale} techSection={techSection}
                            projectSection={projectSection} footer={footer}/>
                <Main>
                    <AboutMe refFn={ref}/>
                    <Technologies techSection={techSection}/>
                    <Slider projectSection={projectSection}/>
                </Main>
                <Footer footer={footer}/>
            </IntlProvider>
        </>
    )
}
