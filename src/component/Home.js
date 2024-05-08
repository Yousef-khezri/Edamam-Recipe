import "./Home.css";
import React from "react";
import { useState } from "react";

export default function Home() {
	const [data, setData] = useState([]);

	const updateData = (newData) => {
		setData(newData);
		console.log(data);
	};

	return (
		<div className="home_Page">
			<h1 className="h1-Name">Edamam Recipe</h1>
		</div>
	);
}
