import { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png';
import Item from '../components/Item/Item';

const ShopCategory = ({ category, banner }) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="container">
      <div className="shop-category">
        <img className="shop-category-banner" src={banner} alt="" />
        <div className="shop-category-sort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shop-category-icon">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="shop-category-product">
          {all_product.map((item, i) => {
            if (category === item.category) {
              return <Item key={i} item={item} />;
            } else {
              return null;
            }
          })}
        </div>
        <div className="shop-category-load">
          Explore More
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
