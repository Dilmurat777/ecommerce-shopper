import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className="hero-hand-icon">
              <p>New</p>
              <img src={hand_icon} alt="hand" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
          </div>
          <div className="hero-latest-btn">
            <div>Lates Collection</div>
            <img src={arrow_icon} alt="arrow" />
          </div>
        </div>

        <div className="hero-right">
          <img src={hero_image} alt="hero image" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
