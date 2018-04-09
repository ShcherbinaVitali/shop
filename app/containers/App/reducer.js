import { GET_MENU, MENU_LOAD_ERR } from './constants';

import { fromJS } from "immutable";

const DEFAULT_MENU = fromJS(
	[
		{
			"title": "Home",
			"href": ""
		}
	]
);

const initialState = fromJS({
	mainMenu: DEFAULT_MENU,
});

function getMenuReducer(state = initialState, action) {
	switch (action.type) {
		case GET_MENU:
			return state.set('mainMenu', action.payload);
		case MENU_LOAD_ERR:
			return state.set('mainMenu', []);
		default:
			return state;
	}
}

export default getMenuReducer;