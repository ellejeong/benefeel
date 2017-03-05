import React from 'react';
import { Link } from 'react-router';

export default props => {
	const categories = ['mental', 'physical', 'thoughts', 'themes'];

	return (
		<div>
			<ul className="nav navbar-nav">
				<li className="dropdown">
					<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Categories <span className="caret"></span></a>
					<ul className="dropdown-menu">
						<li>
							<Link to={'/categories/mental'}>Mental</Link>
						</li>
						<li>
							<Link to={'/categories/physical'}>Physical</Link>
						</li>
						<li>
							<Link to={'/categories/thoughts'}>Thoughts</Link>
						</li>
						<li>
							<Link to={'/categories/themes'}>Themes</Link>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
};
