import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
	const [email, setEmail] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = 'http://localhost:8080/api/password-reset';
			const { data } = await axios.post(url, { email });
			setMsg(data.message);
			setError("");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				setMsg("");
			}
		}
	};

	return (
        
		<div className="inner">
        				<h3>Forgot Password</h3>

			<form className="form-control" onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="Email"
					name="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					required
					className="form-control"
				/>
				{error && <div className="form-control">{error}</div>}
				{msg && <div className="form-control">{msg}</div>}
                <input type='submit'className="btn btn-dark btn-lg btn-block" value='Submit' />

			</form>
		</div>
	);
};

export default ForgotPassword;