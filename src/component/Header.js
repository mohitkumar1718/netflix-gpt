import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

export const Header = () => {
  const dispatch = useDispatch();
	const nevigate = useNavigate();
  
	const user = useSelector((store) => store.user);

  useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, photoURL } = user;
				dispatch(
					addUser({
						email: email,
						uid: uid,
						displayName: displayName,
						photoURL: photoURL,
					}),
          nevigate("/browse")
				);
			} else {
				dispatch(removeUser());
        nevigate("/")
			}
		});
	}, []);

	const signOutbtn = () => {
		signOut(auth)
			.then(() => {
			})
			.catch((error) => {
				// An error happened.
			});
	};
	return (
		<div className='absolute w-full bg-gradient-to-b from-black flex justify-between z-40'>
			<img
				className=' w-48 mx-2 '
				src='https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png'
				alt='Netflix'
			/>
			{user && (
				<div className='flex p-2'>
					<img
						className='h-14 my-6 rounded-lg'
						src={user?.photoURL}
						alt='img'
					/>
					<button
						onClick={signOutbtn}
						className='bg-red-600 p-2 font-bold text-white h-10 my-9 rounded-lg mx-2'>
						Sign out
					</button>
				</div>
			)}
		</div>
	);
};
export default Header;
