import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";

const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Giả lập API gọi tới backend
		if (username === "admin" && password === "1234") {
			const user = { username, token: "fake-jwt-token" };
			dispatch(loginSuccess(user));
			alert("Đăng nhập thành công!");
		} else {
			alert("Tên đăng nhập hoặc mật khẩu không đúng!");
		}
	};

	return (
		<form onSubmit={handleSubmit} className='p-4 border rounded'>
			<div>
				<label>Tên đăng nhập:</label>
				<input
					type='text'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className='border p-1'
				/>
			</div>
			<div>
				<label>Mật khẩu:</label>
				<input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className='border p-1'
				/>
			</div>
			<button type='submit' className='mt-2 p-1 bg-blue-500 text-white'>
				Đăng nhập
			</button>
		</form>
	);
};

export default LoginForm;
