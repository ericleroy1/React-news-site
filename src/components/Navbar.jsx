import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="navbar">
			<div className="navbar-container">
				<Link to="/home">NEWS LOGO</Link>
				<ul>
					<li>
						<Link to="/home">Home</Link>
					</li>
					<li>
						<Link to="/search">Search</Link>
					</li>
					<li>
						<Link to="/mynews">MyNews</Link>
					</li>
					<li>
						<Link to="/logout">Logout</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
