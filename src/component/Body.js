import React, { useEffect } from "react";
import Login from "./Login";
import { Browse } from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
const Body = () => {
	const dispatch = useDispatch();

	const appRoute = createBrowserRouter([
		{
			path: "/",
			element: <Login />,
		},
		{
			path: "/browse",
			element: <Browse />,
		},
	]);

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
				);
			} else {
				dispatch(removeUser());
			}
		});
	}, []);
	return (
		<div>
			<RouterProvider router={appRoute} />
		</div>
	);
};

export default Body;
