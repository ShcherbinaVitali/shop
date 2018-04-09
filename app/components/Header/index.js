/* eslint-disable */
import React, { Component } from 'react';
import Navigation from "../Navigation";
import Contact from "../Contact";

class Header extends Component {
	render() {
		return(
			<header>
				header
				<div>
					<Contact/>
				</div>
				<Navigation/>
			</header>
		);
	}
}

export default Header;