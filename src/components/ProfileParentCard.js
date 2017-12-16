import React, { Component } from 'react';
import ProfileCard from './ProfileCard'

function isSearchTerm(searchItem) {
	return function (item) {
		return !searchItem || item.title.toLowerCase().includes(searchItem.toLowerCase());
	}
}

class ProfileParentCard extends Component {
	constructor(props) {
		super(props);
		console.log(this.props.data);
	}

	render() {
		if (this.props.hasErrored) {
			return <p>Sorry! There was an error loading the items</p>;
		}
		if (this.props.isLoading) {
			return <p>Loading…</p>;
		}
		if (!this.props.data) { return null; }
		return (
			<div className="container">
				{this.props.data.results.filter(isSearchTerm(this.props.searchTermVal)).map(item =>
					<ProfileCard key={item.id} item={item} />
				)}
			</div>
		);
	}
}


export default ProfileParentCard;