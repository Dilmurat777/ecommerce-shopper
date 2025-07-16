import './Popular.css';
import data_product from './../assets/data';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className="container">
      <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
          {data_product.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
