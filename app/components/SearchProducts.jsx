import React from 'react';

export default props => {

	return (
		<form onSubmit={props.handleSearchSubmit} className="navbar-form navbar-left">
			<div className="form-group">
				<input
					onChange={props.handleInputChange}
					value={props.searchTerm}
					className="form-control"
					placeholder="Search"
				/>
			</div>
			<button type="submit" className="btn btn-default">Search</button>
		</form>
	);
};
