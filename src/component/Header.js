import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { languageOptions } from "../utils/constant";

export const Header = () => {
  const dispatch = useDispatch();
	const nevigate = useNavigate();
  
	const user = useSelector((store) => store.user);

  useEffect(() => {
		const unsubscribe= onAuthStateChanged(auth, (user) => {
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
		return ()=>unsubscribe();
	}, []);

	const handleGptSearchState=()=>{
		dispatch(toggleGptSearchView());
	}

	const signOutbtn = () => {
		signOut(auth)
			.then(() => {
			})
			.catch((error) => {
				// An error happened.
			});
	};

    const handleLanguageChange=(e)=>{
		console.log(e.target.value);
	}

	return (
		<div className='absolute w-full bg-gradient-to-b from-black flex justify-between z-30 px-10'>
		   
			<img
				className=' w-48 mx-2 '
				src= {LOGO} 
				alt='Netflix'
			/>
			{user && (
				<div className='flex '>
				<select onChange={handleLanguageChange} className="h-10 p-2 mt-9 mr-3 rounded-lg bg-slate-500 bg-opacity-90" name="language" id="">
				   {languageOptions.map((lang)=><option  key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
					

				</select>
				<button onClick={handleGptSearchState} className=" h-10 p-2 mt-9 mr-8 bg-purple-700 rounded-lg">Gpt Search</button>
					<img
						className='h-12 mt-8 rounded-lg'
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
