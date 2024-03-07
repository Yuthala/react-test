import { useState } from 'react';
import './App.css';
import data from './data.js';


function App() {

  const [cart, setCart] = useState(data);
  console.log(data);

	//функция увеличения количества товара в корзине
	const increase = (id) => {

		setCart((cart) => {
			return cart.map((product) => {
				if (product.id === id) {
					return {
						...product,
							count: product.count + 1,
							priceTotal: (product.count + 1) * product.price
					};
				}
				return product;
			})
		})
	}

	//функция уменьшения количества товара в корзине
	const decrease = (id) => {

		setCart((cart) => {
			return cart.map((product) => {
				if (product.id === id) {

					const newCount = product.count - 1 > 1 ? product.count - 1 : 1;

					return {
						...product,
							count: newCount,
							priceTotal: newCount * product.price
					};
				}
				return product;
			})
		})
	}

  //функция-обработчик события в инпуте "количество товара" 
	// const changeValue = (id, value) => {
	// 	setCart((cart) => {
	// 		return cart.map((product) => {
	// 			if(product.id === id) {
	// 				return {
	// 					...product,
	// 					count: value,
	// 					priceTotal: value * product.price
	// 				}
	// 			}
	// 			return product
	// 		})
	// 	})
	// }

  return (
    <div className="App">
      <h3>Счетчик: {cart.count}</h3>
      {/* <input onChange={(e) => {changeValue( +e.target.value)}} type="number" className="count__input" min="1" max="10" value={cart}/> */}
      <button onClick={increase}>Добавить</button>
      <button onClick={decrease}>Убрать</button>
    </div>
  );
}

export default App;
