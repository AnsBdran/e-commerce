import { toast } from "react-toastify";

// add item to cart
export const addItemToCart = (cartItems, product) => {
  const checkIfItemExist = cartItems.find((item) => item.id === product.id);

  if (checkIfItemExist) {
    return cartItems.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: ++item.quantity };
      } else return item;
    });
  } else {
    toast.success(msg(product), {
      autoClose: 2500,
      hideProgressBar: true,
      draggable: true,
    });
    return [...cartItems, { ...product, quantity: 1 }];
  }
};

// remove item from cart
export const removeItemFromCart = (cartItems, product) => {
  if (product.quantity === 1) {
    return cartItems.filter((item) => item.id !== product.id);
  } else {
    return cartItems.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: --item.quantity };
      } else return item;
    });
  }
};

// delete cart item
export const deleteItemFromCart = (cartItems, id) => {
  return cartItems.filter((item) => item.id !== id);
};

// create the toast message
const msg = (product) => (
  <p>
    Added <span className="text-red-400">{product.title}</span> to the cart
  </p>
);
