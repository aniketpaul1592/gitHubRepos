import React, {Component} from 'react';
import './container.css';
import ProfileParentCard from '../components/ProfileParentCard';
import {connect} from 'react-redux';
import { profileDataFetchData} from '../actions/actionCreator';

class Profile extends Component{
	constructor(props){
		super(props);
		console.log(props)
			this.state ={
			id:props.match.params.id,
		}
	}

	componentDidMount() {
        this.props.fetchData(`https://api.github.com/search/users?q=${this.state.id}`);
    }

	render(){
		return ( <div>
			{ this.props.loader ? <strong className="loading">Loading…</strong> : <ProfileParentCard data={this.props.items} searchTermVal = {this.props.searchTerm}/> }
        </div>);
	}
}

function mapStateToProps(state){
	return{
		items: state.profileData,
		loader: state.itemsIsLoading,
		searchTerm : state.searchTerm,
	};
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(profileDataFetchData(url)),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Profile);