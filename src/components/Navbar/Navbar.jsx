import './Navbar.css';

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState('Shop')
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/">
          {' '}
          <p>SHOPPER</p>
        </Link>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu('shop')}>
          <Link to="/">Shop{menu === 'shop' ? <hr/> : <></>}</Link>
        </li>
        <li onClick={() => setMenu('mens')}>
          <Link to="/mens">Men{menu === 'mens' ? <hr/> : <></>}</Link>
        </li>
        <li onClick={() => setMenu('women')}>
          <Link to="/women">Women{menu === 'women' ? <hr/> : <></>}</Link>
        </li>
        <li onClick={() => setMenu('kids')}>
          <Link to="/kids">Kids{menu === 'kids' ? <hr/> : <></>}</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;