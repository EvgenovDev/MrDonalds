import React from "react";
import styled from "styled-components";
import { ModalButton } from "../Buttons";

const Overlay = styled.div `
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 6;
	display: flex;
	justify-content: center;
	align-items: center;
`

const ModalWindow = styled.div `
	background-color: white;
	width: 50%;
	height: 600px;
	border-radius: 20px;
	position: relative;
`

const ModalWindowBanner = styled.div `
	background-image: ${({img}) => {
		return `url(${img})`
	}};
	width: 100%;
	height: 200px;
	background-size: cover;
	background-position: center;
	border-radius: 20px 20px 0 0;
`

const ModalWindowDescription = styled.div `
	display: flex;
	justify-content: space-around;
	margin-top: 20px;
`

const ModalWindowSpan = styled.span `
	font-family: Pacifico;
	font-size: 36px;
`

const ModalClose = styled.div `
	width: 30px;
	height: 30px;
	position: absolute;
	right: 25px;
	top: 35px;
	cursor: pointer;
`

const ModalCloseSpan = styled.span `	
	position: absolute;
 	display: block;
	height: 2px;
	width: 100%;
	background-color: orange;
	transform: rotate(${({deg}) => {
		return `${deg}deg`;
	}});
`

const CountWrap = styled.div `
	display: flex;
	justify-content: space-around;
	margin-bottom: 30px;
	align-items: center;
	margin-top: 50px;
`

const CountInput = styled.input `
	width: 50px;
	text-align: center;
	height: 30px;
	border: none;
	&:focus {
		outline: none;
	}
`

const CountSpan = styled.span `
	font-size: 26px;
`

const ButtonCount = styled.button `
	width: 35px;
	height: 35px;
	text-align: center;
	background-color: transparent;
	border-radius: 50%;
	border: black solid 1px;
	cursor: pointer;
	color: #299B01;
	&:hover {
		background-color: #299B01;
		color: white;
		border: #299B01 solid 1px;
	}
`

export const Modal = ({setOpenModal, openModal, order, setOrder, count, setCount, changeCount}) => {

	const closeModal = (e) => {
		if (e.target.id === "overlay" || e.target.closest("#close")) {
			setOpenModal(null);
			setCount(1);
		}
	}

	const newOrder = {
		...openModal,
		count: count
	};

	const addToOrder = () => {
		setOrder([...order, newOrder]);	
		setOpenModal(null);		
		setCount(1);	
	}

	return (
		<Overlay onClick={closeModal} id="overlay">
			<ModalWindow>
				<ModalClose id="close">
					<ModalCloseSpan deg={-135}/>
					<ModalCloseSpan deg={-45}/>
				</ModalClose>
				<ModalWindowBanner img={openModal.img}/>
				<ModalWindowDescription>
					<ModalWindowSpan>{openModal.name}</ModalWindowSpan>
					<ModalWindowSpan>{openModal.price}руб</ModalWindowSpan>
				</ModalWindowDescription>
				<CountWrap>
					<CountSpan>Количество</CountSpan>
					<div>
						<ButtonCount 
						onClick={() => setCount(count - 1)}
						disabled={count <= 1}>-</ButtonCount>
						<CountInput 
							value={count < 1 ? 1 : count}
							type="number"
							onChange={(e) => changeCount(e)}/>
						<ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
					</div>
				</CountWrap>
				<ModalButton 
					text="Добавить" 
					func={addToOrder}>
				</ModalButton>
			</ModalWindow>
		</Overlay>
	)
}