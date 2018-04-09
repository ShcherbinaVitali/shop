/* eslint-disable */
import { GET_MENU, MENU_LOAD_ERR,GET_CONTACTS } from './constants';

import { fromJS } from "immutable";

const DEFAULT_MENU = [
	{
		"title": "Home",
		"href": ""
	}
];

const DEFAULT_CONTACTS = [
	"+375 29 555 55 55",
	"+375 29 555 55 55",
];

const initialMenuState = fromJS({
	mainMenu: DEFAULT_MENU,
	phones: DEFAULT_CONTACTS,
});

export default function appReducer(state = initialMenuState, action) {
	switch (action.type) {
		case GET_MENU:
			return state.set('mainMenu', action.payload);
		case MENU_LOAD_ERR:
			return state.set('mainMenu', []);
		case GET_CONTACTS:
			return state;
		default:
			return state;
	}
}