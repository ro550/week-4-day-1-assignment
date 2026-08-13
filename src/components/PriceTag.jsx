
function PriceTag ({ price, currency = "KES", discount }) {
    const discountedPrice = discount ? price - (price * discount) / 100 : price;
    return (
        <div>
            {discount ? (
                <p>
                    {currency} {discountedPrice.toLocaleString()}{" "}
                    <span>
                        <s>
                            {currency} {price.toLocaleString()}
                        </s>{" "}
                        (-{discount}%)
                    </span>
                </p>
            ) : (
                <p>
                    {currency} {price.toLocaleString()}
                </p>
            )}
        </div>
    );
}
export default PriceTag;