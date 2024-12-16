import { useState } from "react";


import languages from "../languages";
import TitleBtn from "./TitleBtn";
import DescCard from "./DescCard";


function Main() {
    const [activeBtn, setActiveBtn] = useState(1);

    return (
        <main className="container my-5 d-flex justify-content-center">
            <div className="d-flex flex-column">
                <div>
                    <TitleBtn
                        languages={languages}
                        activeBtn={activeBtn} 
                        setActiveBtn={setActiveBtn} 
                    />
                </div>
                    <DescCard activeCard={languages} setActiveCard={setActiveBtn}/>
            </div>
        </main>
    );
}

export default Main;