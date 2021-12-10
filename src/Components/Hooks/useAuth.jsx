import React from "react";

export const useAuth = (firebaseAuth) => {
	const provider = new firebaseAuth.GoogleAuthProvider();
	const [auth, setAuth] = React.useState(null);

	const login = () => firebaseAuth().signInWithPopup(provider);

	const logOut = () => 
		firebaseAuth().signOut()
			.catch(error => console.log(error.message));

	React.useEffect(() => {
		firebaseAuth().onAuthStateChanged((user) => {
			setAuth(user)
		})
	}, [auth])

	return {auth, login, logOut}
}