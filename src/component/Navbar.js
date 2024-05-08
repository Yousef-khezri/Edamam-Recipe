import "./Navbar.css";
import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
	return (
		<div className="header">
			<nav>
				<div className="navbar">
					<Link style={{ margin: "10px 30px" }} to="/">
						Home
					</Link>
					<div>
						<Link style={{ margin: "10px 30px" }} to="/search">
							Search
						</Link>
						<Link
							style={{ margin: "10px 30px" }}
							to="/favorite-recipes"
						>
							Favorit
						</Link>
					</div>
				</div>
				<Outlet />
			</nav>
		</div>
	);
}
