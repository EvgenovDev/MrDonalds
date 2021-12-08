import React from "react";
import styled from "styled-components";
import { getCheckedToppings } from "../Functions/getToppings";

const ToppingsUl = styled.ul `
	list-style-type: disc;
	padding-bottom: 10px;
	margin-bottom: 10px;
	width: 100%;
	border-bottom: 1px dashed black;
`

const ToppingsItem = styled.li `

`

const ToppingsEmpty = styled.p `
	width: 100%;
	text-align: center;
	border-bottom: 1px dashed black;
	padding-bottom: 10px;
	margin-bottom: 10px;
`

export const ToppingsList = ({elem}) => {
	return (
		getCheckedToppings(elem.topping).length > 0 ? 
			<ToppingsUl>
			{getCheckedToppings(elem.topping).map(item => 
				<ToppingsItem>{item.name}</ToppingsItem>
			)}
		</ToppingsUl> : <ToppingsEmpty>Без добавок</ToppingsEmpty>										
	)
}