import React, { useState , useEffect } from 'react';

export default function CartOffCanvas({ cartItems }) {
  // Use a useEffect to update the cart when cartItems prop changes
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(cartItems.map((item) => ({ ...item, quantity: 1 })));
  }, [cartItems]);

  const handleIncrement = (productID) => {
    const updatedCart = cart.map((item) => {
      if (item.productID === productID) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleDecrement = (productID) => {
    const updatedCart = cart.map((item) => {
      if (item.productID === productID) {
        const newQuantity = item.quantity - 1;
        if (newQuantity <= 0) {
          // Remove the item from the cart if quantity is zero or less
          return null;
        }
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(Boolean); // Use filter(Boolean) to remove null items
  
    setCart(updatedCart);
  };
  

  const calculateTotalPrice = () => {
    return cart.reduce((total, cartItem) => {
      return total + cartItem.price * cartItem.quantity;
    }, 0);
  };

  return (
    <div>
      <div
        className="offcanvas offcanvas-end text-bg-dark"
        data-bs-theme="dark"
        data-bs-backdrop="static"
        tabIndex={-1}
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="staticBackdropLabel">
            Cart Items
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          {cart.map((cartItem) => (
            <div
              key={cartItem.productID}
              className="card oof-canvas-card mb-3 bg-dark text-white"
              style={{ maxWidth: 540 }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={cartItem.image}
                    className="img-fluid rounded-start"
                    alt={cartItem.productTitle}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{cartItem.productTitle}</h5>
                    <p className="card-text">
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDecrement(cartItem.productID)}
                      >
                        -
                      </button>
                      <small className="p-2 text-white">
                        RS.{cartItem.price * cartItem.quantity}
                      </small>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleIncrement(cartItem.productID)}
                      >
                        +
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="container">
          <footer className="bg-dark text-light text-center py-3">
            <div className="container">
              <p>Total Price: RS.{calculateTotalPrice()}</p>
              <button className="btn btn-danger">Checkout</button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
