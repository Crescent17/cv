import GlobalStyle from "./util/globalStyles.js";
import Navigation from "./components/layout/Navigation.jsx";
import Header from "./components/layout/Header.jsx";
import Technologies from "./components/technologies/Technologies.jsx";
import ProjectSlider from "./components/projects/ProjectSlider.jsx";

export default function App() {
    return (
        <div>
            <GlobalStyle/>
            <Navigation/>
            <Header/>
            <Technologies/>
            <ProjectSlider/>
        </div>
    )
}
