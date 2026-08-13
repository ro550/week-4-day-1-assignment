import StarRating from "./StarRating";

function ProductCard({ image, name, price, rating, inStock }) {
    return(
        <div className="product-card">
            <div className="product-image-container">
                <img
                    src={image}
                    alt={name}
                    className="product-image"
                    style={{ filter: inStock ? "none" : "grayscale(100%)" }}
                />
                {!inStock && (
                    <span className="stock-badge">Out of Stock</span>
                )}
            </div>
            <h3>{name}</h3>
            <StarRating rating={rating} maxStars={5}
            />
            <p>KES {price.toLocaleString()}</p>
            {inStock ? ( <button>Add to Cart</button>) : ( <button disabled>Unavailable</button>)}
        </div>
    );
}

export default ProductCard;