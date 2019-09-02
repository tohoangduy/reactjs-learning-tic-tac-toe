import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
	return (
		<div>
			<h2>TIC TAC TOE</h2>

			<ul>
				<li>
					<Link to="/game">PLAY GAME</Link>
				</li>
				<li>
					<Link to="/about">ABOUT</Link>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
