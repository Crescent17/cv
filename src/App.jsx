import GlobalStyle from "./util/globalStyles.js";
import Navigation from "./components/layout/Navigation.jsx";
import Header from "./components/layout/Header.jsx";
import Technologies from "./components/technologies/Technologies.jsx";
import Slider from "./components/slider/Slider.jsx";
import ChangeLanguage from "./components/language/ChangeLanguage.jsx";
import {IntlProvider} from "react-intl";
import {useState} from "react";
import translations from './util/translations.json'
import Footer from "./components/layout/Footer.jsx";
import {useInView} from "react-intersection-observer";

export default function App() {
    const [locale, setLocale] = useState('en')
    const messages = translations[locale]
    const {ref, inView, entry} = useInView({
        threshold: 0,
    });
    return (
        <>
            <GlobalStyle/>
            <IntlProvider locale={locale} messages={messages}>
                <ChangeLanguage setLocale={setLocale}/>
                <Navigation headerInView={entry?.isIntersecting}/>
                <Header refFn={ref}/>
                <Technologies/>
                <Slider/>
                <Footer/>
            </IntlProvider>
        </>
    )
}
