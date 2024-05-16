import Login from "./Login";
import { Browse } from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { MovieDetails } from "./MovieDetails";
import { GptSearch } from "./GptSearch";

const Body = () => {
	

	const appRoute = createBrowserRouter([
		{
			path: "/",
			element: <Login />,
		},
		{
			path: "/browse",
			element: <Browse />,
		},
		{
            path:"/movie/:movieID",
            element:<MovieDetails/>
         },
		{
			path:"/gptSearch",
			element:<GptSearch/>
		}
	]);

	
	return (
		<div>

			<RouterProvider router={appRoute} />
		</div>
	);
};

export default Body;
