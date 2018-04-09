/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
/* eslint-disable */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default function App() {
	return (
		<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route component={NotFoundPage} />
				</Switch>
				<Footer />
			</div>
		</MuiThemeProvider>
	);
}
