import React, { Component } from 'react';
import { connect } from 'react-redux';
import './container.css';
import { itemsFetchData, sortAsPerRatingYear } from '../actions/actionCreator';
import { Link } from 'react-router-dom';

class Popular extends Component {
	constructor(props) {
		super(props);
		this.state = {
			langs: {
				'JavaScript': {
					name: 'JavaScript',
					firstDiv:'Brendan Eich (Born July 4, 1961) is an American technologist and creator of the JavaScript programming language. He co-founded the Mozilla project, the Mozilla Foundation and the Mozilla Corporation, and served as the Mozilla Corporation\'s chief technical officer and briefly its chief executive officer. He is the CEO of Brave Software.',
					secondDiv:'JavaScript two JavaScript two JavaScript two JavaScript two JavaScript two JavaScript two JavaScript two ',
					thirdDiv:'JavaScript three JavaScript three JavaScript three JavaScript three JavaScript three JavaScript three JavaScript three ',
			},
				'Java': {
					name: 'Java',
					firstDiv:'Java',
					secondDiv:'Java',
					thirdDiv:'',
			},
				'Python': {
					name: 'Python',
					firstDiv:'Python',
					secondDiv:'Python',
					thirdDiv:'Python',
			},
				'Php': {
					name: 'Php',
					firstDiv:'Php',
					secondDiv:'Php',
					thirdDiv:'Php',
			},
				'Ruby': {
					name: 'Ruby',
					firstDiv:'Ruby',
					secondDiv:'Ruby',
					thirdDiv:'Ruby',
				},
			},
			currLangSelection: "JavaScript",
		}
		this.getLangDetail = this.getLangDetail.bind(this)
		this.getRepos = this.getRepos.bind(this)
	}

	getLangDetail(val) {
		this.setState({ currLangSelection: val });
	}

	getRepos(val) {
		this.props.fetchData(`https://api.github.com/search/repositories?q=${this.state.currLangSelection}`);
	}


	render() {

		//Add flex box to box 1
		return (
			<div className="parentClass">
				<div className="banner">
					<h1>TechScan</h1>
				</div>
				<div className="buttonAlignment">
				{Object.keys(this.state.langs).map((val) => 
					<div className="fixedSize {val}" onClick={() => this.getLangDetail(val)}>{val}</div>
				) }
				</div>

				{/* <div className="callOutsContainer">
					<div className="callOut">
						<h4>Feature 1</h4>
						<p>{this.state.langs[this.state.currLangSelection]['firstDiv']}</p>
					</div>

					<div className="callOut">
						<h4>Feature 2</h4>
						<p>{this.state.langs[this.state.currLangSelection]['secondDiv']}</p>
					</div>

					<div className="callOut">
						<h4>Feature 3</h4>
						<p>{this.state.langs[this.state.currLangSelection]['thirdDiv']}</p>
					</div>
				</div> */}
				<div className="buttonAlignment">
					<Link to={`/listrepo/${this.state.currLangSelection}`}><div className="fixedSize" onClick={() => this.getRepos(this.state.currLangSelection)}>GetRepos for {this.state.currLangSelection}</div></Link>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	////console.log(state);
	return {
		movieData: state.items,
		searchTerm: state.searchTerm,
		hasErrored: state.itemsHasErrored,
		isLoading: state.itemsIsLoading
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (url) => dispatch(itemsFetchData(url)),
		sortAsPerRatingYear: (val) => dispatch(sortAsPerRatingYear(val)),
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(Popular);
