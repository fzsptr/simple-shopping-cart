import React from "react";
import type { UserCartProps } from "../types/user-cart";

function UserCartComponent({
  cartCourses,
  onIncrease,
  onDecrease,
  onRemove,
  totalAmount,
}: UserCartProps) {
  return (
    <div className={`cart ${cartCourses.length > 0 ? "active" : ""}`}>
      {cartCourses.length === 0 ? (
        <p className="empty-cart">Bro, you cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartCourses.map((item) => (
              <li key={item.product.id} className="cart-item">
                <div>
                  <div className="item-info">
                    <div className="item-image">
                      <img
                        src={item.product.image}
                        alt="item.product.name"/>
                    </div>
                    <div className="item-details">
                      <h3>{item.product.name}</h3>
                      <p>Price: Rp{item.product.price}k</p>
                    </div>
                  </div>

                  <div>
                    <div className="item-actions">
                      <button
                        className="remove-button"
                        onClick={() =>
                          onRemove(item.product)}>
                        Remove Product
                      </button>
                    </div>

                    <div className="quantity">
                      <button
                        style={{ margin: "1%" }}
                        onClick={() => {
                          onIncrease(item.product);
                        }}
                      > + </button>
                      <p className="quant">{item.quantity}</p>
                      <button
                        onClick={() => {
                          onDecrease(item.product)
                      }}> - </button>
                    </div>

                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="checkout-section">
            <div className="checkout-total">
              <p className="total">Total Amount : Rp{totalAmount}k</p>
            </div>
          </div>
          <button 
              className="checkout-button"
              disabled={cartCourses.length === 0 || totalAmount === 0}>
              Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
}

export default UserCartComponent;