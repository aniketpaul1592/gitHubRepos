import React, {Component} from 'react';
import {fetchFavId,removeFavId} from '../actions/actionCreator';
import FontAwesome from 'react-fontawesome';
import {connect} from 'react-redux';

class ProfileCard extends Component{
	constructor(props){
		super(props);
	}
	render(){
			return(
				<div key={this.props.item.id} className="myCardData">
				<div className="cardTitle">{this.props.item.full_name}</div>
				<div>
				<p>Created At: {this.props.item.created_at}</p>
				<p>Updated At{this.props.item.updated_at}</p>
				<p>Language: {this.props.item.language}</p>
				<p>Milestones{this.props.item.milestones_url}</p>
				</div>
				<div className = "faIcons">
					<span className="Votes">Votes:{this.props.item.score}</span>
				</div>
			</div>
			);
	}
}

export default ProfileCard;