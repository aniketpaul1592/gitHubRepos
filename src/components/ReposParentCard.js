import React, {Component} from 'react';
import RepositoryCard from './RepositoryCard'

function isSearchTerm(searchItem){
	return function(item){
		console.log(item);
		return !searchItem || item.full_name.toLowerCase().includes(searchItem.toLowerCase());
	}
}

class ReposParentCard extends Component{
	render(){
		if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        if (this.props.data.length === 0) { return null; }
		return(
			<div className="myCardAlignment">
			{console.log(this.props.searchTermVal)}
			{this.props.data.results.filter(isSearchTerm(this.props.searchTermVal)).map(item=>
				<RepositoryCard key= {item.id} item={item} />
			)}
			</div>
		);
	}
}

export default ReposParentCard;