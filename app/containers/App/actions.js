import { GET_MENU, MENU_LOAD_ERR } from './constants';
import { Menu } from "../../components/Navigation/menu";

export function getMenu() {
	return {
		type: GET_MENU,
		payload: Menu.items
	};
}

export function menuLoadErr() {
	return {
		type: MENU_LOAD_ERR
	}
}