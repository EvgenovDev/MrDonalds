import React from "react";
import Header from "./Components/Header/Header";
import { Main } from "./Components/MainMenu/Main";
import { createGlobalStyle } from "styled-components";
import { Modal } from "./Components/Modal/Modal";
import { Order } from "./Components/Order/Order";
import { useOpenModal } from "./Components/Hooks/useOpenModal";
import { useAddOrder } from "./Components/Hooks/useAddOrder";
import { useIndex } from "./Components/Hooks/useIndex";

const GlobalStyle = createGlobalStyle `
	html {
		box-sizing: border-box;
	}

	*,
	::before,
	::after {
		box-sizing: inherit;
	}

	body {
		font-size: 20px;
		color: black;
		background-color: #f0f0f0;
		font-family: Roboto, sans-serif;
		margin: 0px;
		padding: 0px;
	}

	h1,h2,h3 {
		padding: 0px;
		margin: 0px;
		font-family: Pacifico;
	}

	img {
		max-width: 100%;
		heigth: auto;
	}

	ul {
		list-style-type: none;
	}

	input[type=number]::-webkit-inner-spin-button,
	input[type=number]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`

function App() {

	const openModal = useOpenModal();
	const orders = useAddOrder();
	const indexOrder = useIndex();

  return (
    <div className="App">
		 <GlobalStyle/>
		 <Header />
		 {orders.order.length > 0 && <Order {...orders} {...openModal} {...indexOrder}/>}
		 <Main {...openModal}/>
		 {openModal.openModal && <Modal {...openModal} {...orders} {...indexOrder}/>}
    </div>
  );
}

export default App;
