import React, {Component} from 'react';
import {removeFavId} from '../actions/actionCreator';
import FontAwesome from 'react-fontawesome';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class RepositoryCard extends Component{
	constructor(props){
		super(props);
		this.state = {
			test:"heart",
		}
		this.removeFavourites = this.removeFavourites.bind(this);
	}

	removeFavourites(itemId){
		this.setState({test:"heart-o"});
		this.props.removeFavId(itemId);
	}

	render(){
		return(
			/*<Link to={`/profile/${this.props.item.owner.login}`}>*/
			<div key={this.props.item.id} className="myCardData">
				<div className="cardTitle">{this.props.item.full_name}</div>
				{/* <div className="poster">
					<img src = {"https://image.tmdb.org/t/p/w300/"+this.props.item.poster_path} alt=""/>
				</div> */}
				<div>
				<p>Created At: {this.props.item.created_at}</p>
				<p>Updated At{this.props.item.updated_at}</p>
				<p>Language: {this.props.item.language}</p>
				</div>
				<div className = "faIcons">
					<span className="Votes">Votes:{this.props.item.score}</span>
				</div>
			</div>
			/*</Link>*/
		);
	}
}

export default RepositoryCard;