import './ProductDisplay.css';
import start_icon from '../Assets/star_icon.png';
import start_dull_icon from '../Assets/star_dull_icon.png';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { useNavigate } from 'react-router-dom';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext)
  const navigate = useNavigate()
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-display-img">
          <img className="product-display-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-stars">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-price">
          <div className="product-display-right-price-old">${product.old_price}</div>
          <div className="product-display-right-price-new">${product.new_price}</div>
        </div>
        <div className="product-display-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vel harum neque
          pariatur impedit, voluptate odit! Eum quia, atque delectus laudantium reiciendis quibusdam
          assumenda. Accusamus, ut consectetur. Voluptate, reprehenderit excepturi!
        </div>
        <div className="product-display-right-size">
          <h1>Select size</h1>
          <div className="product-display-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <div className="product-display-right-buttons">
          <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
          <button onClick={() => navigate(-1)}>Go To Back</button>
        </div>
        <p className="product-display-right-category">
          <span>Category :</span>Women, T-Shirt, Crop Top
        </p>
        <p className="product-display-right-category">
          <span>Tags :</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
