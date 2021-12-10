import  styled  from "styled-components";
import logo from "../../images/logo.svg";
import user from "../../images/user.svg"

const NavBar = styled.header `
	width: 100%;
	background-color: #299B01;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
`

const Logo = styled.div `
	display: flex;
	align-items: center;
	cursor: pointer;
`

const NavTitle = styled.h1 `
	font-size: 24px;
	color: white;
	margin-left: 12px;
`

const User = styled.div `
	display: flex;
	flex-direction: column;
	cursor: pointer;
	align-items: center;
`

const LogoImg = styled.img `
	width: 50px;
`

const UserLogo = styled.img ` 
	width: 32px;
	margin-bottom: 5px;
`

const UserText = styled.span `
	color: white;
	font-size: 16px;
	::after {
		content: '';
		background: white;
		height: 1px;
		width: 100%;
		display: block;
		opacity: 0;
	}
	:hover{
		color: orange;
		::after {
			opacity: 1;
			background-color: orange;
		}
	}
`

const Exit = styled.span `
	font-size: 16px;
	position: absolute;
	right: 30px;
	color: white;
	text-align: right;
	&:hover {
		transform: rotate(360deg);
		transition: 0.5s transform;
		color: orange;
	}
`

const Header = ({auth, login, logOut}) => {
	return (
		<NavBar>
			<Logo>
				<LogoImg src={logo} alt="Логотип"/>
				<NavTitle >MRDonald’s</NavTitle>
			</Logo>
			{auth ?  
				<User>
					<UserLogo src={auth.photoURL} alt={auth.displayName}/>
					<UserText>{auth.displayName}</UserText>
					<Exit onClick={logOut}>X</Exit>
				</User>
			: <User onClick={login}>
				<UserLogo src={user} alt="Пользователь"/>
				<UserText>Войти</UserText>
			</User>}

		</NavBar>
	)
} 

export default Header;