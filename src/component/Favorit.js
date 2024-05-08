import "./Favorit.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Favorit({
	favoriteRecipes,
	addTofavoriteRecipes,
	setSelectedCardData,
}) {
	const navigate = useNavigate();

	const handleCardClick = (index) => {
		setSelectedCardData(favoriteRecipes[index]);
		navigate(`/cooking-recipe/${favoriteRecipes[index].recipe.label}`);
		console.log("index : " + index);
		console.log(favoriteRecipes[index]);
	};

	const clickedHeart = (item) => {
		console.log("item : " + item);
		addTofavoriteRecipes(item);
	};

	const create_Card = (item, index) => {
		return (
			<Card
				className="card"
				key={index}
				style={{ width: "18rem", cursor: "pointer" }}
			>
				<Card.Img
					variant="top"
					src={item.recipe.image}
					onClick={() => handleCardClick(index)}
				/>
				<Card.Body>
					<Card.Title onClick={() => handleCardClick(index)}>
						{item.recipe.label}
					</Card.Title>
					<Card.Text
						onClick={() => handleCardClick(index)}
						style={{
							borderTop: "2px solid black",
							borderBottom: "2px solid black",
						}}
					>
						{parseFloat(item.recipe.calories.toFixed(0))} CALORIES6
						| {item.recipe.ingredients.length} INGREDIENTS
					</Card.Text>
					{favoriteRecipes.some(
						(recipe) => recipe.recipe.label === item.recipe.label
					) ? (
						<img
							key={index}
							onClick={() => clickedHeart(item)}
							style={{ width: "50px", border: "none" }}
							src="/images/heart-red.png"
						/>
					) : (
						<img
							key={index}
							onClick={() => clickedHeart(item)}
							style={{ width: "50px", border: "none" }}
							src="/images/heart.png"
						/>
					)}
				</Card.Body>
			</Card>
		);
	};

	return (
		<div className="main">
			{favoriteRecipes.length === 0 ? (
				"Loading..."
			) : (
				<div className="card_Box">
					{favoriteRecipes.map((item, index) =>
						create_Card(item, index)
					)}
				</div>
			)}
		</div>
	);
}
