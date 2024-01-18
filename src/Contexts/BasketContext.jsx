import { createContext, useEffect, useState } from "react";


export const BasketContext=createContext()

export const BasketProvider=({children})=>{


const [BasketItems, setBasketItems] = useState(localStorage.getItem('Basket') ? JSON.parse(localStorage.getItem('Basket')) : [])

const addToCart = (item) => {
  const isItemInBasket = BasketItems.find((product) => product.id === item.id);

  if (isItemInBasket) {
	setBasketItems(
		BasketItems.map((product) => product.id === item.id
		  ? { ...product, count: product.count + 1 }  : product
	  )
	);
  } else {
	setBasketItems([...BasketItems, { ...item, count: 1 }]);
  }
};

const removeFromBasket= (item) => {
  const isItemInBasket = BasketItems.find((product) => product.id === item.id);
//   (isItemInBasket.count === 1)
  if (isItemInBasket) {
	setBasketItems(BasketItems.filter((product) => product.id !== item.id));
  } else {
	setBasketItems(
		BasketItems.map((product) => product.id === item.id
		  ? { ...BasketItems, count: BasketItems.count - 1 }  : product
	  )
	);
  }
};

const clearCart = () => {
  setBasketItems([]);
};

const getBasketTotal = () => {
  return BasketItems.reduce((total, item) => total + item.price * item.count, 0);
};

useEffect(() => {
  localStorage.setItem("Basket", JSON.stringify(BasketItems));
}, [BasketItems]);

useEffect(() => {
  const BasketItems = localStorage.getItem("Basket");
  if (BasketItems) {
	setBasketItems(JSON.parse(BasketItems));
  }
}, []);

console.log("basket cart" , BasketItems);

	return(
		<BasketContext.Provider value={{
			BasketItems,
			addToCart,
			removeFromBasket,
			clearCart,
			getBasketTotal,
		  }}>
			{children}
		</BasketContext.Provider>
	)
}