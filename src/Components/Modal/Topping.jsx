import React from "react";
import styled from "styled-components";

const ToppingsGlobalWrap = styled.div `
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
`

const ToppingsWrap = styled.div `
	display:flex;
	flex-basis: 50%;
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
`

const ToppingCheckbox = styled.input `

`

const ToppingLabel = styled.label `
	width: 130px;
`

const ToppingEmpty = styled.p `
	text-align: center;
	width: 100%;
`

export const Toppings = ({toppings, checkToppings}) => {
	return (
		<>
			{toppings ? 
					<ToppingsGlobalWrap>
					{toppings.map((topping, i) => 
						<ToppingsWrap key={i}>
							<ToppingLabel>{topping.name}</ToppingLabel>
							<ToppingCheckbox type="checkbox"	onChange={() => {checkToppings(i)}}/>
						</ToppingsWrap>
					)}
				</ToppingsGlobalWrap> : <ToppingEmpty>Добавок не предусмотренно</ToppingEmpty>
			}
		</>
	)
}