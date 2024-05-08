import "./PopUp.css";
import React from "react";
import { Modal } from "react-bootstrap";

export default function PopUp({ selectedCardData }) {

	return (
		<div
			className="popupMenu show"
			style={{ display: "block", position: "absolute" }}
		>
			<Modal.Dialog>
				<Modal.Header style={{ height: "50px" }}>
					{/* <Modal.Title>Recipe</Modal.Title> */}
				</Modal.Header>

				<Modal.Body className="modal_Body">
					<img
						src={selectedCardData.recipe.image}
						alt="recipe"
						className="popup-img"
					/>
					<div className="infoBox">
						<h1>{selectedCardData.recipe.label}</h1>
						<label>
							See full recipe on:
							<a href={selectedCardData.recipe.url}>
								Serious Eats
							</a>
						</label>
					</div>
					<hr />
				</Modal.Body>
				<Modal.Footer>
					<div className="box_Info_Footer">
						<div>
							<h2>
								{selectedCardData.recipe.ingredients.length}{" "}
								Ingredients
							</h2>
							<hr />
							<h2>Nutrition</h2>
							{parseFloat(
								selectedCardData.recipe.calories.toFixed(0)
							)}
							<h6>CALORIES</h6>
							<hr />
							<div>
								{selectedCardData.recipe.digest.map(
									(item, index) => (
										<div className="info_item" key={index}>
											<span>{item.label} </span>
											<span>
												{parseFloat(
													item.total.toFixed(0)
												)}
											</span>
										</div>
									)
								)}
							</div>
						</div>
					</div>
				</Modal.Footer>
			</Modal.Dialog>
		</div>
	);
}
