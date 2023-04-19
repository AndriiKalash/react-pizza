import {FC, useEffect, useRef} from 'react';
import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'
import { cartSelector } from "../redux/cart/selectors";
import {Search} from '../components'
import logoSvg from "../assets/img/pizza-logo.svg";
import cartSvg from "../assets/img/cart.svg";

export const Header: FC = () => {

  const { totalPrice, items} = useSelector(cartSelector);
  //I have totalCount in state, but leave it here like in lesson for TS-expl:
  const totalCount = items.reduce((sum:number, item: any)=> sum + item.count, 0);
  const location = useLocation();
  const {pathname} = location;

  const isMounted = useRef(false);
  useEffect(()=>{
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart' , json);
    }
    isMounted.current = true;
  },[items]);
  

  return (
  <div className="header">
    <div className="container">
      <Link to="/">
        <div className="header__logo">
          <img width="38" src={logoSvg} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
      </Link>
     { pathname !== "/cart" && <Search />}  
      <div className="header__cart">
      {
        pathname !== "/cart" && 
        ( <Link to="/cart" className="button button--cart">
          <span>{totalPrice} ₽</span>
          <div className="button__delimiter"></div>
          <img src={cartSvg} alt="cart" />
          <span>{totalCount}</span>
        </Link>
        )
      }     
      </div>
    </div>
  </div>
  )
}


