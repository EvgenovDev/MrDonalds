import React from "react";
import dbMenu from "./DBMenu";
import { ListItem } from "./ListItem";
import  styled  from "styled-components";
import banner from "../images/banner.png";

const Section = styled.section `
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 50px;
`

const MainImgDiv = styled.div `
	text-align: center;
	width: 100%;
	position: relative;
	height: 210px;
	&:after {
		position: absolute;
		content: '';
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: black;
		opacity: 0.5;
		height: 210px;
		z-index: 998;
	}
`

const MainImg = styled.img `
	width: 100%;
	height: 210px;
`

const BannerTitle = styled.h2 `
	color: white;
	font-size: 48px;
	position: absolute;
	top 30%;
	left: 35%;
	z-index: 999;
	letter-spacing: 5px;
`

const SectionTitle = styled.h3 `
	font-size: 36px;
	letter-spacing: 4px;
	margin-bottom: 10px;
`

export const Main = (props) => {
	return (
		<main>
			<MainImgDiv>
				<MainImg src={banner} alt="Главный бургер"/>
				<BannerTitle>Главная страница</BannerTitle>
			</MainImgDiv>
			<Section>
				<SectionTitle>Бургеры</SectionTitle>
				<ListItem items={dbMenu.burger}/>
			</Section>
			<Section>
				<SectionTitle>Закуски</SectionTitle>
				<ListItem items={dbMenu.other}/>
			</Section>
		</main>
	)
}	