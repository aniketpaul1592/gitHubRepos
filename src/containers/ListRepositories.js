import React, {Component} from 'react';
import './container.css';
import ReposParentCard from '../components/ReposParentCard';
import {connect} from 'react-redux';

class ListRepositories extends Component{
	render(){
		return ( <div>
			{ this.props.loader ? <strong className="loading">Loading…</strong> : <ReposParentCard data={this.props.items} searchTermVal = {this.props.searchTerm}/> }
        </div>);
	}
}

function mapStateToProps(state){
	return{
		items: state.items,
		loader: state.itemsIsLoading,
		searchTerm : state.searchTerm,
	};
}
export default connect(mapStateToProps)(ListRepositories);