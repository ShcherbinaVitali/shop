import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');
const selectApp   = (state) => state.get('menu');

const makeSelectLocation = () => createSelector(
	selectRoute,
	(routeState) => routeState.get('location').toJS()
);

const makeSelectMenu = () => createSelector(
	selectApp,
	(appState) => appState.get('mainMenu')
);

export {
	makeSelectLocation,
	makeSelectMenu
};