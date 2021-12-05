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
	border: none;
	border-radius: 5px;
	cursor: pointer;
`

export const ModalButton = () => {
	return (
		<ButtonDiv>
			<Button>Добавить</Button>
		</ButtonDiv>
	)
}