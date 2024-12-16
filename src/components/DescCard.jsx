function DescCard({ languages, activeCard }) {

    const card = languages.find((el) => el.id === activeCard);

    return (
        <div className="d-flex flex-column border border-2 my-3 myTitleCard p-3">
            <h5>{card!= null ? card.title : "null"}</h5>
            <p>{card!= null ? card.description : "null"}</p>
        </div>
    );
}

export default DescCard;