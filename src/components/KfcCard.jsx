import React from 'react';
import '../custom_css/KfcCard.css'

export default function KfcCard({ item, addToCart }) {
  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div className="card text-center">
      <img src={item.image} className="card-img-top " alt={item.productTitle} />
      <div className="card-body">
        <h5 className="card-title">{item.productTitle}</h5>
        <p className="card-text">RS.{item.price}</p>
        <button
          className="btn btn-danger"
          onClick={handleAddToCart}
        >
          + Add to Cart
        </button>
      </div>
    </div>
  );
}