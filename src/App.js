import "./App.css"
import Counter from "./Counter"
import YoutubeBackground from 'react-youtube-background'
import Spacer from "./Spacer"
import { useEffect, useState } from "react"

function App() {
    const tonnes2020 = 1650000000000
    const tpms = 1.10381785895

    const [alpha, setAlpha] = useState({backgroundColor: `rgba(0,0,0,1)`})

    useEffect(() => {
        const incrementer = setTimeout(() => {
            console.log("alpha 0")
            setAlpha({backgroundColor: `rgba(0,0,0,0.2)`})
        }, 5000);
        return () => {clearTimeout(incrementer)}
    }, [])

    return (
        <div className="App">
            <YoutubeBackground
            className="videoBackground"
            videoId={"Bce9ON9Z2VM"} // * commenting this out to save data on my hotspot lol
            >
                <div className="mainBox" style={alpha}>
                    <Spacer vspace="30px"/>
                    <div>
                        <p>Human beings have emitted</p>
                        <Counter tonnes2020={tonnes2020} tpms={tpms} />
                        <p>tons of CO2 since 1800.</p>
                    </div>
                    <div className="footerBox">
                        <p>This estimate is based off a report from <a href="https://ourworldindata.org/co2-and-other-greenhouse-gas-emissions">ourworldindata.org</a>.</p>
                        <a href="https://gabebanks.net">Created by Gabe Banks 2022</a>
                    </div>
                </div>
            </YoutubeBackground>

        </div>
    )
}

export default App
