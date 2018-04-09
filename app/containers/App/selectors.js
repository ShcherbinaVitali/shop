/* eslint-disable */
import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');
const selectApp   = (state) => state.get('app');

const makeSelectLocation = () => createSelector(
	selectRoute,
	(routeState) => routeState.get('location').toJS()
);

const makeSelectMenu = () => createSelector(
	selectApp,
	(appState) => appState.get('mainMenu')
);

const makeContacts = () => createSelector(
	selectApp,
	(appState) => appState.get('phones')
);

export {
	makeSelectLocation,
	makeSelectMenu,
	makeContacts,
};