import GlobalStyle from "./util/globalStyles.js";
import Navigation from "./components/layout/Navigation.jsx";
import Header from "./components/layout/Header.jsx";
import Technologies from "./components/technologies/Technologies.jsx";
import Slider from "./components/projects/Slider.jsx";

export default function App() {
    return (
        <div>
            <GlobalStyle/>
            <Navigation/>
            <Header/>
            <Technologies/>
            <Slider/>
        </div>
    )
}
