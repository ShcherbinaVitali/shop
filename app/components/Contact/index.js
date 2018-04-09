/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContacts } from '../../containers/App/actions';
import { createSelector } from "reselect";
import { makeContacts } from "../../containers/App/selectors";

class Contact extends Component {
	componentWillMount() {
		this.props.getContacts();
	}
	render() {
		return(
			<div className="contact_wrap">
				{
					this.props.phones.map(
						(phone, key) => {
							return(
								<div key={key}>
									{phone}
								</div>
							)
						}
					)
				}
			</div>
		);
	}
}

const mapStateToProps = createSelector(
	makeContacts(),
	(contacts) => {
		let phones = [];
		contacts.forEach((item) => {phones.push(item)});
		
		return {
			phones
		}
	}
);

export default connect(mapStateToProps, { getContacts })(Contact);