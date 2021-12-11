import React from "react";
import styled from "styled-components";
import { ModalButton } from "../Buttons";
import { Toppings } from "./Topping";
import { useCheckToppings } from "../Hooks/useCheckToppings";
import { countPrice } from "../Functions/countPrice";
import { toLocaleStringFunc } from "../Functions/toLocaleStringFunc";
import { useChoices } from "../Hooks/useChoices";
import { Choices } from "./Choices";
import { useCount } from "../Hooks/useCount"

const Overlay = styled.div `
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 99;
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
	justify-content: space-between;
	margin-top: 20px;
	padding: 0px 40px 0px 40px;
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
	margin-top: 20px;
	align-items: center;
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

const TotalCount = styled.div `
	padding: 0px 20px 0px 20px;
	position: absolute;
	bottom: 105px;
	left: 25%;
`

const TotalCountSpan = styled.span `
	&:last-child {
		margin-left: 60px;
	}
`

export const Modal = ({setOpenModal, openModal, order, setOrder, changeCount, indexOrder, setIndexOrder}) => {

	const toppings = useCheckToppings(openModal);
	const choices = useChoices(openModal);
	const count = useCount(openModal);
	const isEdit = indexOrder > -1;


	const closeModal = (e) => {
		if (e.target.id === "overlay" || e.target.closest("#close")) {
			setOpenModal(null);
			count.setCount(1);
			setIndexOrder(undefined);
		}
	}

	const newOrder = {
		...openModal,
		count: count.count,
		topping: toppings.toppings ? toppings.toppings : [],
		priceTopping: (openModal.price * count.count * 0.1),
		choice: choices.choices,
		choices: openModal.choices
	};

	const addToOrder = () => {
		setOrder([...order, newOrder]);	
		setOpenModal(null);		
		count.setCount(1);
		setIndexOrder(undefined);
	}

	const editOrder = (e) => {
		const allOrders = [...order];
		allOrders[indexOrder] = newOrder;
		setOrder(allOrders)
	}

	return (
		<Overlay onClick={closeModal} id="overlay">
			{console.log(openModal)}
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
						onClick={() => count.setCount(count.count - 1)}
						disabled={count.count <= 1}>-</ButtonCount>
						<CountInput 
							value={count.count < 1 ? 1 : count.count}
							type="number"
							onChange={(e) => changeCount(e)}/>
						<ButtonCount onClick={() => count.setCount(count.count + 1)}>+</ButtonCount>
					</div>
				</CountWrap>
				<Toppings {...toppings} openModal={openModal}/>
				<Choices {...choices} openModal={openModal}/>
				<TotalCount>
					<TotalCountSpan><b>Итоговая цена:</b></TotalCountSpan>
					<TotalCountSpan><b>
						{toLocaleStringFunc(
							parseInt(
								countPrice(
									openModal.price,
									count.count,
									toppings.toppings ? toppings.toppings.filter(topping => topping.check === true).length : 0,
									(openModal.price * count.count * 0.1))))}
					</b></TotalCountSpan>
				</TotalCount>
				<ModalButton
					position="absolute"
					bottom="20px"
					left="30%"
					text="Добавить" 
					isEdit={isEdit}
					func={() => {
						isEdit ? editOrder() : addToOrder();
						setOpenModal(null)
						setIndexOrder(undefined)
					}}
					disabled={openModal.choices && !choices.choices}>
				</ModalButton>
			</ModalWindow>
		</Overlay>
	)
}