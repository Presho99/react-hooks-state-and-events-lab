import React, {useState} from "react";

function Item({ name, category }) {
  const [cartItem, setCartItem] = useState(false)

  function handleCart() {
    setCartItem((cartItem) => !cartItem)
  }
  return (
    <li className={cartItem? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick = {handleCart} className={cartItem ? "remove" : "add"}>{cartItem ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
