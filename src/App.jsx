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

export default function App() {
    const [locale, setLocale] = useState('en')
    const messages = translations[locale]
    return (
        <div>
            <GlobalStyle/>
            <IntlProvider locale={locale} messages={messages}>
                <ChangeLanguage setLocale={setLocale}/>
                <Navigation/>
                <Header/>
                <Technologies/>
                <Slider/>
                <Footer/>
            </IntlProvider>
        </div>
    )
}
