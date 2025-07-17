import './RelatedPRoduct.css';
import data from './../Assets/data';
import Item from './../Item/Item';
const RelatedProduct = () => {
  return (
    <div className="related-product">
      <h1>Related Product</h1>
      <hr />
      <div className="related-product-item">
        {data.map((item, i) => {
          return <Item key={i} item={item} />;
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;
