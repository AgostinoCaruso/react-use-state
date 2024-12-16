function DescCard({activeCard}) {
    return (
        <div className="d-flex flex-column border border-2 my-3 myTitleCard p-3">
            <h5>{activeCard.title}</h5>
            <p>{activeCard.description}</p>
        </div>
    );
}

export default DescCard;