import React from "react";
import styled from "styled-components";
import { ModalButton } from "./Buttons";
import trashImg from "../images/trash.svg"

const OrderWindow = styled.section `
	position: fixed;
	background-color: white;
	width: 380px;
	height: 100%;
	z-index: 20;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: 3px 4px 5px rgba(0, 0, 0, 1);
	border-radius: 4px;
`

const Total = styled.div `
	display: flex;
	font-size: 24px;
	padding: 20px;
	width: 100%;	
`

const OrderWindowTitle = styled.h2 `
	font-size: 36px;
	letter-spacing: 4px;
	text-transform: uppercase;
	flex-grow: 1;
	margin-top: 30px;
`

const TotalText = styled.span `
	flex-grow: 1;
`

const TotalPrice = styled.span `
`

const TotalCount = styled.span `
	margin-right: 45px;
`

const OrderListItem = styled.ul `
	width: 100%;
	padding: 15px 10px 15px 15px;
`

const OrderItem = styled.li `
	display: flex;
	width: 100%;
	& span:first-child{
		flex-grow: 1;
	}
	& span:nth-child(2) {
		margin-right: 40px;
	}
	margin-bottom: 15px;
`

const Trash = styled.span `
	width: 24px;
	height: 24px;
	background-image: url(${trashImg});
	margin-left: 10px; 
	cursor: pointer;
`

export const Order = () => {
	return (
		<OrderWindow>
			<OrderWindowTitle>
				Ваш заказ
			</OrderWindowTitle>
			<OrderListItem>
				<OrderItem>
					<span>JSBurger</span>
					<span>1</span>
					<span>250руб</span>
					<Trash/>
				</OrderItem>
				<OrderItem>
					<span>JSBurger</span>
					<span>1</span>
					<span>250руб</span>
					<Trash/>
				</OrderItem>
				<OrderItem>
					<span>JSBurger</span>
					<span>1</span>
					<span>250руб</span>
					<Trash/>
				</OrderItem>
				<OrderItem>
					<span>Нагиевцы</span>
					<span>2</span>
					<span>500руб</span>
					<Trash/>
				</OrderItem>
			</OrderListItem>
			<Total>
				<TotalText><b>Итого:</b></TotalText>
				<TotalCount><b>5</b></TotalCount>
				<TotalPrice><b>800руб</b></TotalPrice>
			</Total>
			<ModalButton>Оформить заказ</ModalButton>
		</OrderWindow>
	)
}