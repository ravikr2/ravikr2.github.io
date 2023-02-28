import { useEffect, useState } from "react";
import "../Styles/Home.css";

export const Home = () => {
    const [test, setTest] = useState(0);
    useEffect(() => { setTest(test + 1) }, [])
    return (
        <div className="Home" id="home">
            <h1>Home Page</h1>
            <img className="home-img" src="/ravisharma.png" alt="Something went wrong" />
            <h1 id="user-detail-name">Ravi Sharma</h1>
            <h2 id="user-detail-intro">A short intro about me</h2>
            <a target={"_blank"} href="https://drive.google.com/uc?export=download&id=1uG22xLwKqY-MzErmyG1znHakTwf52gnX" download="Ravi-Sharma-Resume.pdf"><button id="resume-button-2">Download Resume</button></a>
        </div>
    )
}