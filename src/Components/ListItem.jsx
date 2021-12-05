import React from "react"
import styled from "styled-components"

const List = styled.ul `
	display: flex;
	flex-wrap: wrap;
`

const Item = styled.li `
	position: relative;
	width: 400px;
	height: 155px;
	background: ${(props) => `url(${props.img})`};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 15px;
	margin-bottom: 15px;
	border-radius: 5px;
	z-index: 1;
	cursor: pointer;
	color: white;
	font-family: Pacifico;
	font-size: 30px;
	&:hover {
		font-size: 35px;
		color: orange;
		text-decoration: underline;
	}
	&:after {
		content: '';
		position: absolute;
		background-color: black;
		opacity: 0.4;
		z-index: 2;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		border-radius: 5px;
	}
`

const ItemSpan = styled.span `
	z-index: 3;
`

export const ListItem = ({items, setOpenModal}) => {
	return (
		<List>
			{items.map(item => 
				<Item img={item.img} 
				key={item.id}
				onClick={() => {
					setOpenModal(item)
				}}>
					<ItemSpan>
						{item.name} / {item.price}руб
					</ItemSpan>
				</Item>
			)}
		</List>
	)
}