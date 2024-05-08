import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Main from "./component/Main";
import PopUp from "./component/PopUp";
import Favorit from "./component/Favorit";
import Notfound from "./component/Notfound";
import Search from "./component/Search";

function App() {
	const [data, setData] = useState([]);
	const [selectedCardData, setSelectedCardData] = useState(null);
	const [favoriteRecipes, setFavoriteRecipes] = useState([]);

	const updateData = (newData) => {
		setData(newData);
		console.log(data);
	};

	const addTofavoriteRecipes = (newItem) => {
		if (
			!favoriteRecipes.some(
				(item) => item.recipe.label === newItem.recipe.label
			)
		) {
			const updatedItems = [...favoriteRecipes, newItem];
			setFavoriteRecipes(updatedItems);
			console.log(favoriteRecipes);
		} else {
			const filteredItems = favoriteRecipes.filter(
				(item) => item.recipe.label !== newItem.recipe.label
			);
			setFavoriteRecipes(filteredItems);
			console.log(favoriteRecipes);
		}
	};

	// useEffect(() => {
	// 	console.log(favoriteRecipes);
	// }, [favoriteRecipes]);

	return (
		<Routes>
			<Route path="/" element={<Navbar />}>
				<Route path="/" element={<Home />} />
				<Route
					path="/search"
					element={<Search updateData={updateData} data={data} />}
				/>
				<Route
					path="/cooking-recipes/:valueSearch"
					element={
						<Main
							data={data}
							setSelectedCardData={setSelectedCardData}
							addTofavoriteRecipes={addTofavoriteRecipes}
							favoriteRecipes={favoriteRecipes}
						/>
					}
				/>
				<Route
					path="/cooking-recipe/:nameFood"
					element={<PopUp selectedCardData={selectedCardData} />}
				/>
				<Route
					path="/favorite-recipes"
					element={
						<Favorit
							favoriteRecipes={favoriteRecipes}
							addTofavoriteRecipes={addTofavoriteRecipes}
							setSelectedCardData={setSelectedCardData}
						/>
					}
				/>
			</Route>
			<Route path="/*" element={<Notfound />} />
		</Routes>
	);
}

export default App;
