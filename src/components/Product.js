import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  //   console.log(basket);

  const addToBasket = () => {
    // push item to data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <p>{rating}</p>
      </div>

      {/* <div className='product__rating'>
            <p>{rating}</p>
        </div> */}

      <img src={image} alt="product" />

      <button className="btn" onClick={addToBasket}>
        Add to basket
      </button>
    </div>
  );
}

export default Product;
