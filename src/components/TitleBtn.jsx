function TitleBtn({ languages, activeBtn, setActiveBtn }) {
    return (
        languages.map((ele) => (
            <button
                key={ele.id} 
                onClick={() => setActiveBtn(ele.id)}
                className={`btn ${activeBtn === ele.id ? "btn-danger" : "btn-success"} mx-1`}
            >
                {ele.title}
            </button>
        ))
    );
}

export default TitleBtn;