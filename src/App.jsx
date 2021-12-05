import React from "react";
import Header from "./Components/Header";
import { Main } from "./Components/Main";
import { createGlobalStyle } from "styled-components";
import { Modal } from "./Components/Modal";

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
`

function App() {

	const [openModal, setOpenModal] = React.useState(null);

  return (
    <div className="App">
		 <GlobalStyle/>
		 <Header />
		 <Main setOpenModal={setOpenModal}/>
		 <Modal openModal={openModal} setOpenModal={setOpenModal}/>
    </div>
  );
}

export default App;
