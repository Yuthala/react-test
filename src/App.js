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

  return (
    <div className="App">
      {/* <h3>Счетчик: {counter}</h3> */}
      <button onClick={increase}>Добавить</button>
      <button onClick={decrease}>Убрать</button>
    </div>
  );
}

export default App;
