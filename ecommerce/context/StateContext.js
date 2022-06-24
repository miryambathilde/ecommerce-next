import React, { createContext, useContext, useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Context = createContext();

/**
 * 
 * useState: here we are managing all states of the application
 * useStateSnippet 
 */

/**
 * 
 * First we manage the states and their initial state
 */
export const StateContext = ({ children }) => {
	const [showCart, setShowCart] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalQuantities, setTotalQuantities] = useState(0);
	const [qty, setQty] = useState(1);

	let foundProduct;
	let index;

	/**
	 * funtion to add item to cart
	 * We check if the item is already in the cart, in this case we just updated the quantity
	 */

	const addToCart = (product, quantity) => {
		const checkProductInCart = cartItems.find((item) => item._id === product._id);

		setTotalPrice((prevTotalPrice) => prevTotalPrice + (product.price * quantity));
		setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

		if (checkProductInCart) {
			const updatedCartItems = cartItems.map((cartProduct) => {
				if (cartProduct._id === product._id) {
					return { ...cartProduct, quantity: cartProduct.quantity + quantity };
				}
			});

			setCartItems(updatedCartItems);

		} else {
			product.quantity = quantity;

			setCartItems([...cartItems, { ...product }]);
		}
		/**
			 * toast: notifications
		**/
		toast.success(`${qty} ${product.name} added to cart.`);
	};

	/**
	 * toogle items quantity in cart
	 */

	const toggleCartItemQuantity = (id, value) => {
		// first we need to find the product with that id
		foundProduct = cartItems.find((item) => item._id === id);
		index = cartItems.findIndex((product) => product._id === id);
		// once we find the product with that id we updated the cart adding that item as long as their id is not the same
		const newCartItems = cartItems.filter((item) => item._id !== id);

		// incrementing the quantity
		if (value === 'inc') {
			setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }]);
			setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
			setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1);
			// decresing the quantity
		} else if (value === 'dec') {
			if (foundProduct.quantity > 1) {
				setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }]);
				setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
				setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1);
			}
		}
	};

	/**
	 * remove items of cart
	 */

	const removeItemfromCart = (product) => {
		foundProduct = cartItems.find((item) => item._id === product._id);
		const newCartItems = cartItems.filter((item) => item._id !== product._id);

		setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
		setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
		setCartItems(newCartItems);
	};

	/**
	 * Here we are managing the quantity of cart items
	 */
	const incQty = () => {
		setQty((prevQty) => prevQty + 1);
	};

	/**
	 * we want to decrease the quantity of cart items, but the minimum quantity is 1
	 */
	const decQty = () => {
		setQty((prevQty) => {
			if (prevQty - 1 < 1) return 1;

			return prevQty - 1;
		});
	};

	return (
		<Context.Provider
			value={ {
				showCart,
				setShowCart,
				cartItems,
				totalPrice,
				totalQuantities,
				qty,
				incQty,
				decQty,
				addToCart,
				toggleCartItemQuantity,
				removeItemfromCart
			} }
		>
			{ children }
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);