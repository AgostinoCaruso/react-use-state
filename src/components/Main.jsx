import { useState } from "react";


import languages from "../languages";
import TitleBtn from "./TitleBtn";
import DescCard from "./DescCard";


function Main() {
    const [activeBtn, setActiveBtn] = useState(0);

    return (
        <main className="container my-5 d-flex justify-content-center">
            <div className="d-flex flex-column">
                <TitleBtn
                    languages={languages}
                    activeBtn={activeBtn}
                    setActiveBtn={setActiveBtn}
                />
                <DescCard
                    languages={languages}
                    activeCard={activeBtn}
                />
            </div>
        </main>
    );
}

export default Main;