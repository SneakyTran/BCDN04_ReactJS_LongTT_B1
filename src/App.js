import { Fragment } from "react";
import "./App.css";
import BodyComponent from "./components/Body/BodyComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import HeaderComponent from "./components/Header/HeaderComponent";

function App() {
    return (
        <Fragment>
            <HeaderComponent />
            <BodyComponent />
            <FooterComponent />
        </Fragment>
    );
}

export default App;
