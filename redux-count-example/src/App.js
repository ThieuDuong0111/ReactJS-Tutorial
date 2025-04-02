import React from "react";
import { useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";

function App() {
	console.log("vào đây");
	const user = useSelector((state) => state.auth.user);
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	return (
		<div className='App'>
			{isAuthenticated ? (
				<div>
					<h1>Chào mừng, {user.username}!</h1>
					<p>Token: {user.token}</p>
				</div>
			) : (
				<LoginForm />
			)}
		</div>
	);
}

export default App;
