import "./Search.css";
import React from "react";
import { useState } from "react";
import { Container, Form, InputGroup, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Search({ updateData }) {
	const [inputSearch, setInputSearch] = useState("");
	const navigate = useNavigate();

	const handleInputChange = (event) => {
		setInputSearch(event.target.value);
	};

	const btnClicked = () => {
		if (inputSearch !== "") {
			const url = `https://api.edamam.com/search?q=${inputSearch}&app_id=de3984f2&app_key=8276e966b3d1343751ae8adf8f74006b`;
			fetch(url)
				.then((res) => res.json())
				.then((json) => {
					if (json.hits.length > 0) {
						updateData(json.hits);
						navigate(`/cooking-recipes/${inputSearch}`);
					} else {
						alert(
							`No food was found with the name ${inputSearch} `
						);
					}
					console.log(json.hits);
				});
		} else {
			alert("Please enter Username or ID");
		}
	};

	// const clickedSearch = () => {
	// 	if (valueInput !== "") {
	// 		const checkSearch = users.find(
	// 			(item) =>
	// 				item.id === parseInt(valueInput) ||
	// 				item.username === valueInput
	// 		);

	// 		console.log(checkSearch);

	// 		if (checkSearch !== undefined) {
	// 			navigate(`/users/user/${checkSearch.username}`);
	// 		} else {
	// 			alert("No user found with the provided Username or ID");
	// 		}
	// 	} else {
	// 		alert("Please enter Username or ID");
	// 	}
	// };

	console.log("inputSearch : " + inputSearch);

	return (
		<div className="search_Page">
			<h1 className="h1-Name">Edamam Recipe</h1>
			<Container
				style={{
					display: "flex",
					justifyContent: "space-around",
					alignItems: "center",
					marginTop: "10px",
					width: "100%",
				}}
			>
				<InputGroup
					className="mb-3"
					style={{
						marginTop: "10px",
						width: "80%",
						height: "50px",
					}}
				>
					<Form.Control
						type="text"
						id="input-Search"
						placeholder="Find the best recipes from across the web..."
						aria-label="Recipient's username"
						aria-describedby="basic-addon2"
						value={inputSearch}
						onChange={handleInputChange}
						style={{
							width: "50%",
						}}
					/>
					<Button variant="primary" onClick={btnClicked}>
						<Image
							src="/images/search.png"
							roundedCircle
							width={20}
						/>
					</Button>
				</InputGroup>
				{/* <h1>{inputSearch}</h1> */}
			</Container>
		</div>
	);
}
