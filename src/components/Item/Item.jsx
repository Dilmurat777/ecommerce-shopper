import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
  return (
    <div className="container">
      <div className="item">
        <Link to={`/product/${item.id}`}>
         <img src={item.image} alt={item.image} />
        </Link>
        <p>{item.name}</p>
        <div className="item-price">
          <div className="item-price-new">$ {item.new_price}</div>
          <div className="item-price-old">$ {item.old_price}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
