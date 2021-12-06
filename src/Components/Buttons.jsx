import styled from "styled-components"

const ButtonDiv = styled.div `
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 200px;
`

const Button = styled.button `
	text-transform: uppercase;
	color: white;
	padding: 20px;
	width: 265px;
	heigth: 25px;
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
`

export const ModalButton = () => {
	return (
		<ButtonDiv>
			<Button>Добавить</Button>
		</ButtonDiv>
	)
}