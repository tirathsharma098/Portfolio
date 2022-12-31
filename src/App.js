import { Fragment } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Skills from "./Components/Skills";

function changeShape() {
    const shapes = document.querySelectorAll(".shapeConvert");
    let firstNum = Math.floor(Math.random() * 150) + 50;
    let secondNum = Math.floor(Math.random() * 150) + 50;
    let thirdNum = Math.floor(Math.random() * 150) + 50;
    let fourthNum = Math.floor(Math.random() * 150) + 50;
    let fifthNum = Math.floor(Math.random() * 150) + 50;
    let sixthNum = Math.floor(Math.random() * 150) + 50;
    let seventhNum = Math.floor(Math.random() * 150) + 50;
    let eighthNum = Math.floor(Math.random() * 150) + 50;
    shapes.forEach(
        (shape) =>
            (shape.style.borderRadius = `${firstNum}px ${secondNum}px ${thirdNum}px ${fourthNum}px/${fifthNum}px ${sixthNum}px ${seventhNum}px ${eighthNum}px`)
    );
}

const App = (props) => {
    changeShape();
    setInterval(changeShape, 2000);

    return (
        <Fragment>
            <Header />
            <Nav />
            <About />
            <Skills />
            <Contact />
            <Footer />
        </Fragment>
    );
};
export default App;
