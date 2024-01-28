import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { Browse } from "./Browse";
const Login = () => {
	const userIn=useSelector(store=>store.user);
	const nevigate=useNavigate();
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
						photoURL: USER_AVATAR,
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
					
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessege(errorCode + "-" + errorMessage);
					// ..
				});
		} else {
			signInWithEmailAndPassword(auth,email.current.value,
				password.current.value,
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					// console.log(user);
					nevigate("/browse");
				
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessege(errorCode + "-" + errorMessage);
				});
		}
	};
	return userIn? (<Browse/>): (
		<div>
		 {/* if(!userIn){nevigate("/browse")} */}
			<Header />
			<img className='absolute h-full object-cover sm:w-full' src={BG_URL} alt=''
			/>
			<div className='absolute my-44 mx-auto right-0 left-0 w-4/5 sm:w-3/5 md:w-2/5 lg:w-96 p-8 bg-black bg-opacity-80 rounded-md'>
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
