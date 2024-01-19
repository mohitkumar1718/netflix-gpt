import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
	const nevigate = useNavigate();
	const dispatch = useDispatch();
	const [errorMessege, setErrorMessege] = useState(null);
	const [isSignIN, setIsSignIN] = useState(true);
	const toggel = () => {
		isSignIN ? setIsSignIN(false) : setIsSignIN(true);
	};
	const email = useRef(null);
	const password = useRef(null);
	const name = useRef(null);

	const handleButtonclick = () => {
		// console.log(email.current.value);
		// console.log(password.current.value);

		const messege = checkValidData(email.current.value, password.current.value);
		setErrorMessege(messege);
		if (messege) return;
		// if messege is not null means false user details

		// form is signup
		if (!isSignIN) {
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value,
			)
				.then((userCredential) => {
					// Signed up
					const user = userCredential.user;
					updateProfile(auth.currentUser, {
						displayName: name.current.value,
						photoURL: "https://avatars.githubusercontent.com/u/115692399?v=4",
					})
						.then(() => {
							const { uid, email, displayName, photoURL } = auth.currentUser;
							dispatch(
								addUser({
									email: email,
									uid: uid,
									displayName: displayName,
									photoURL: photoURL,
								}),
							);
							nevigate("/browse");
						})
						.catch((error) => {
							// An error occurred
							// ...
						});
					console.log(user);
					nevigate("/browse");
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessege(errorCode + "-" + errorMessage);
					// ..
				});
		} else {
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value,
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					console.log(user);
					nevigate("/browse");
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessege(errorCode + "-" + errorMessage);
				});
		}
	};
	return (
		<div>
			<Header />
			<img
				className='absolute'
				src='https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg'
				alt=''
			/>
			<div className='absolute my-44 mx-auto right-0 left-0 w-3/12 p-8 bg-black bg-opacity-80 rounded-md'>
				<form onSubmit={(e) => e.preventDefault()} className='px-5 py-7 '>
					<h1 className='text-white text-3xl my-3'>
						{isSignIN ? "Sign In" : "Sign Up"}
					</h1>
					{!isSignIN ? (
						<input
							ref={name}
							className='w-full p-3 my-2 bg-gray-800 text-white rounded-md'
							type='text'
							placeholder='Name'
						/>
					) : (
						""
					)}
					<input
						ref={email}
						className='w-full p-3 my-2 bg-gray-800 text-white rounded-md'
						type='text'
						placeholder='Email Address'
					/>
					<input
						ref={password}
						className='w-full p-3 my-2  bg-gray-800 text-white rounded-md'
						type='password'
						placeholder='Password'
					/>
					<button
						onClick={handleButtonclick}
						className=' bg-red-600 w-full p-3 my-3 rounded-md'>
						{isSignIN ? "Sign In" : "Sign up"}
					</button>
					<p className='text-red-500 font-bold text-lg'>{errorMessege}</p>
					<h3 className='text-white cursor-pointer' onClick={toggel}>
						{isSignIN
							? "New to Netflix? Sign up Now "
							: "Already registered? Sign In"}
					</h3>
				</form>
			</div>
		</div>
	);
};

export default Login;
