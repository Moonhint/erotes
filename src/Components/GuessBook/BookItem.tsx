interface BookItemParams {
    name: string,
    comment: string,
}
function BookItem({ name, comment }:BookItemParams) {
    return (
        <div className="book-item">
            <h3>
                {name}
            </h3>
            <p>
                {comment}
            </p>
        </div>
    );
}

export default BookItem;
