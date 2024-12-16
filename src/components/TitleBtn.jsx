
function TitleBtn({languages}) {

    return (
        languages.map((ele) =>
            <>
                <button className="btn btn-success mx-1">
                    {ele.title}
                </button>
            </>
        )
    );
}

export default TitleBtn;