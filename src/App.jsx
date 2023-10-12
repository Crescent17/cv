import GlobalStyle from "./util/globalStyles.js";
import Navigation from "./components/layout/Navigation.jsx";
import Header from "./components/layout/Header.jsx";

export default function App() {
    return (
        <div>
            <GlobalStyle/>
            <Navigation/>
            <Header/>
        </div>
    )
}
