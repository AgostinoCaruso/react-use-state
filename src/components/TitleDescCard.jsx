import { useState } from "react";

import languages from "../languages";
import TitleBtn from "./TitleBtn";
import DescCard from "./DescCard";


function TitleDescCard(){
    const [activeBtn, setActiveBtn] = useState(0);
    return(
        <div className="d-flex flex-column align-items-center">
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
    );
}

export default TitleDescCard;