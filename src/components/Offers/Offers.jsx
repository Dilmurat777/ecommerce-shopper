import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className="offers">
      <div className="container">
        <div className="offers-content">
          <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offer for You</h1>
            <p>ONLY ON BESTSELLERS PRODUCT</p>
            <button>Check Now</button>
          </div>
          <div className="offers-right">
            <img src={exclusive_image} alt={exclusive_image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
