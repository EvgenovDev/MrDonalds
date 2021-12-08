import React from "react";
import styled from "styled-components";

const ChoicesGlobalWrap = styled.div `
	display: flex;
	justify-content: space-around;
`

const ChoicesWrap = styled.div `

`

const ChoicesRadio = styled.input `

`

const ChoicesName = styled.span `

`

export const Choices = ({choices, checkChoices}) => {
	return (
		<>
			{choices ? 
				<ChoicesGlobalWrap>
				{choices.map((choice, i) => 
					<ChoicesWrap key={i}>
						<ChoicesRadio type="radio" name="choice"/>
						<ChoicesName>{choice}</ChoicesName>
					</ChoicesWrap>
				)}
				</ChoicesGlobalWrap> : <></>
			}
		</>
	)
}