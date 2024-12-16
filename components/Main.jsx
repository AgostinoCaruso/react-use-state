import languages from "../src/languages";

function Main() {
    return (
        <main className=" container my-5">
            {
                languages.map((ele)=>{
                    <div className="btn btn-success">
                        {ele.title}
                    </div>
                })
            }
        </main >
    );
}

export default Main;
