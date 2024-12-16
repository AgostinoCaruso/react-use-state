import languages from "../languages";
import TitleBtn from "./TitleBtn";

function Main() {
    return (
        <main className=" container my-5 d-flex justify-content-center">
            {
                <div className="d-flex flex-column">
                    <div>
                        <TitleBtn languages={languages} />
                    </div>

                    <div className="d-flex flex-column border border-2 my-3 myTitleCard p-3">
                        <h5>HTML</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et corrupti excepturi voluptatibus praesentium qui aut quisquam pariatur cupiditate nam quod.</p>
                    </div>
                </div>
            }
        </main >
    );
}

export default Main;