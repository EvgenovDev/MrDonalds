import React from "react";
import styled from "styled-components";
import { ModalButton } from "../Buttons";
import trashImg from "../../images/trash.svg"
import { countPrice } from "../Functions/countPrice";
import { countAllPrice } from "../Functions/countPrice";
import { toLocaleStringFunc } from "../Functions/toLocaleStringFunc";
import { ToppingsList } from "./ToppingsList";
import { getCountOrder } from "../Functions/getCountOrder";

const OrderWindow = styled.section `
	position: fixed;
	background-color: white;
	width: 380px;
	height: 100%;
	z-index: 20;
	top: 0;
	left: 0;
	box-shadow: 3px 4px 5px rgba(0, 0, 0, 1);
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const Wrap = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
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
	max-height: 400px;
	overflow: auto;
`

const OrderItem = styled.li `
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin-bottom: 15px;
	& span {
		margin: auto;
	}
	& span:first-child {
		width: 100px;
	}
	& span:nth-child(3) {
		width: 100px;
		text-align: right;
	}
`

const Trash = styled.span `
	width: 24px;
	height: 24px;
	background: url(${trashImg}) right no-repeat;
	margin-left: 10px; 
	cursor: pointer;
`

const Empty = styled.p `
	text-align: center;
`

export const Order = ({order, setOrder, openOrder, count}) => {
	return (
		<OrderWindow>
			<Wrap>
				<OrderWindowTitle>
					Ваш заказ
				</OrderWindowTitle>
					{order.length > 0 ? 
						<OrderListItem>
							{order.map(elem => 
								<>
									<OrderItem>
										<span>{elem.name}</span>
										<span>{elem.count}</span>
										<span>{toLocaleStringFunc(parseInt(countPrice(elem.price, elem.count, elem.topping.length, elem.priceTopping)))}</span>
										<Trash/>
									</OrderItem>
									<ToppingsList elem={elem}/>
								</>

							)}
				</OrderListItem> : <Empty>Список заказов пуст</Empty>}
			</Wrap>
			<Wrap>
			<Total>
					<TotalText><b>Итого:</b></TotalText>
					<TotalCount><b>{getCountOrder(order)}</b></TotalCount>
					<TotalPrice><b>{toLocaleStringFunc(parseInt(countAllPrice(order)))}</b></TotalPrice>
				</Total>
			<ModalButton text="Оформить заказ"></ModalButton>
			</Wrap>
		</OrderWindow>
	)
}