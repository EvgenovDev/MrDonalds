import styled from "styled-components"

const ButtonDiv = styled.div `
	display: flex;
	justify-content: center;
	align-items: center;
	${({position, bottom, left}) => `position: ${position}; bottom: ${bottom}; left: ${left}`}
`

const Button = styled.button `
	text-transform: uppercase;
	color: white;
	padding: 20px;
	width: 265px;
	background-color: #299B01;
	font-size: 24px;
	border: 2px solid #299B01;
	border-radius: 5px;
	cursor: pointer;
	transition-property: background-color, color, border;
	&:hover {
		background-color: white;
		color: #299B01;
		border: 2px solid #299B01;
	}
	&:disabled {
		background-color: #9a9a9a;
		border: #9a9a9a solid 2px;
		&:hover {
			color: white;
		}
	}
`

export const ModalButton = (
	{text,
	 func,
	 position,
	 bottom,
	 left,
	 disabled}) => {
	return (
		<ButtonDiv position={position} bottom={bottom} left={left}>
			<Button onClick={func} disabled={disabled}>{text}</Button>
		</ButtonDiv>
	)
}