
function StarRating({ rating, maxStars = 5 }) {
    return (
        <div>
            {Array.from({ length: maxStars }).map((_, index) => (
                <span key={index}>
                    {index < rating ? "★" : "☆"}
                </span>
            ))}
        </div>
    );
}

export default StarRating;