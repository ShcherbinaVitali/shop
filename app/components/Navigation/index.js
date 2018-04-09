/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getMenu } from '../../containers/App/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { makeSelectMenu } from '../../containers/App/selectors';

class Navigation extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			mainMenu: []
		};
	}
	componentWillMount() {
		this.props.getMenu();
	}
	render() {
		return(
			<div>
				{
					this.props.mainMenu.map(
						(item, k) => {
							return(
								<Link to={`/${item.href}`} key={k}>
									{item.title}
								</Link>
							)
						}
					)
				}
			</div>
		);
	}
}
const mapStateToProps = createSelector(
	makeSelectMenu(),
	(mainMenu) => {
		let menu = [];
		mainMenu.forEach((item) => {menu.push(item)});
		
		return {
			mainMenu: menu
		}
	}
);

Navigation.propTypes = {
	mainMenu: PropTypes.array
};

export default connect(mapStateToProps, {getMenu})(Navigation);