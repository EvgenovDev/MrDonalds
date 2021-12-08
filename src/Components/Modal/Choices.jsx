import React from "react";
import styled from "styled-components";

const ChoicesGlobalWrap = styled.div `
	display: flex;
	justify-content: space-around;
	margin-top: 40px;
`

const ChoicesWrap = styled.div `

`

const ChoicesRadio = styled.input `

`

const ChoicesName = styled.span `

`

export const Choices = ({choices, checkChoices, openModal}) => {
	return (
		<>
			{openModal.choices ? 
				<ChoicesGlobalWrap>
				{openModal.choices.map((choice, i) => 
					<ChoicesWrap key={i}>
						<ChoicesRadio type="radio" name="choice" onChange={checkChoices}/>
						<ChoicesName>{choice}</ChoicesName>
					</ChoicesWrap>
				)}
				</ChoicesGlobalWrap> : <></>
			}
		</>
	)
}