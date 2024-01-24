import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { languageOptions } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch=useSelector(store=>store.gpt.showGptSearchView);

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
		dispatch(changeLanguage(e.target.value));
	}

	return (
		<div className='absolute w-full bg-gradient-to-b from-black flex flex-col md:flex-row md:justify-between z-30 px-10'>
		   
			<img
				className=' w-32 md:w-44 mx-auto md:mx-2 '
				src= {LOGO} 
				alt='Netflix'
			/>
			{user && (
				<div className='flex -mt-4 md:mt-0 justify-between md:justify-normal'>
				{ showGptSearch && <select onChange={handleLanguageChange} className="h-10 p-2 mt-2 md:mt-9 mr-3 rounded-lg bg-slate-500 bg-opacity-90" name="language" id="">
				   {languageOptions.map((lang)=><option  key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
					

				</select>}
				<button onClick={handleGptSearchState} className="h-10 p-2 mt-2 md:mt-9 mr-8 bg-purple-700 rounded-lg">{showGptSearch? "HomePage" :"Gpt Search"}</button>
					<img
						className='h-12 mt-2 hidden md:inline-block md:mt-9 rounded-lg'
						src={user?.photoURL}
						alt='img'
					/>
					<button
						onClick={signOutbtn}
						className='bg-red-600 p-2  text-white h-10 mt-2 md:mt-9 rounded-lg mx-2'>
						{'SignOut'}
					</button>
				</div>
			)}
		</div>
	);
};
export default Header;
