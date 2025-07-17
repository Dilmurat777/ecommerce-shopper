import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import './CartItem.css';

const CartItem = () => {
  const {getTotalCartAmount, cartItems, all_product, toRemove } = useContext(ShopContext);

  return (
    <div className="cart-items">
      <div className="cart-items-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((item, i) => {
        if (cartItems[item.id] > 0) {
          return (
            <div key={i}>
              <div className="cart-items-format cart-items-format-main">
                <img src={item.image} alt="" className="cart-icon-product-icon" />
                <p>{item.name}</p>
                <p>$ {item.new_price}</p>
                <button className="cart-items-quantity">{cartItems[item.id]}</button>
                <p>$ {item.new_price * cartItems[item.id]}</p>
                <img className='cart-icon-remove-item' src={remove_icon} alt="" onClick={() => toRemove(item.id)} />
              </div>
              <hr />
            </div>
          );
        }
      return null
      })}
      <div className="cart-items-down">
        <div className="cart-items-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cart-items-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
             <div className="cart-items-total-item">
              <h3>Total</h3>
              <h3>$ {getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-items-promo-code">
          <p>If you have a Promo Code, Enter it here</p>
          <div className="cart-items-promo-code-box">
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
