import React, { useContext, useEffect, useState } from "react";
import cartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";

const HeaderCardButton = (props) => {
  const [btnIsHighLighted, setBtnIsHighlighted] = useState(false)

  const cartCtx = useContext(cartContext)

  const {items} = cartCtx

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ''}`

  useEffect(() => {
    if (cartCtx.items.length === 0){
      return
    }
    setBtnIsHighlighted(true)

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300);

    return () => {
      clearTimeout(timer)
    }
    
  }, [items])


  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderCardButton;
