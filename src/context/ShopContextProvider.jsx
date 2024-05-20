import { createContext,  useState } from "react";
import { CapItems, acItems, men, women, newItems, discountItems } from "../components/AllData";


export const ShopContext = createContext(null);
const allItems = [...CapItems, ...acItems, ...men, ...women, ...newItems, ...discountItems];


const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < allItems.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

 

  const addToCart = (itemId, button) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    button.textContent = "Added To Cart";
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount =(newAmount, itemId) =>{
    setCartItems((prev) => ({...prev, [itemId]: newAmount}));
  }
  const getTotalCartAmount = ()=>{
    let totalAmount = 0;
    for (const item  in cartItems) {
      if(cartItems[item]>0){
        let itemInfo = allItems.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }

    return totalAmount;
  }
 

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
   
  };
  

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};