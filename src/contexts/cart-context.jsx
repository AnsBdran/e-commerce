import { createContext } from "react";


const cartContext = createContext();


const CartProvider = () => {
    <cartContext.Provider value={cartContext}></cartContext.Provider>
}

export default CartProvider;