import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {getMenu} from '../../containers/HomePage/actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createSelector} from "reselect";
import {selectMenu} from '../../containers/HomePage/selectors';
import {makeSelectLocale} from "../../containers/LanguageProvider/selectors";

class Navigation extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			mainMenu: [],
		};
	}
	componentWillMount() {
		this.props.getMenu();
		//console.log(this.state);
	}
	render() {
		console.log(321);
		return(
			<div>
				{
					console.log(this.props)
				}
				{
					/*this.props.menu.map(
						item => {
							return(
								<Link to={item.href}>
									{item.title}
								</Link>
							)
						}
					)*/
				}
			</div>
		);
	}
}

/*const mapStateToProps = createSelector(
	selectMenu(),
	(mainMenu) => ({ mainMenu })
);*/

const mapStateToProps = (state) => {
	console.log(state);
	return {
		mainMenu: '1234'
	}
}

Navigation.propTypes = {
	mainMenu: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, {getMenu})(Navigation);