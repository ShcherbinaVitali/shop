/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
/* eslint-disable */

export const DEFAULT_LOCALE = 'en';

export const GET_MENU       = 'GET_MENU';
export const MENU_LOAD_ERR  = 'MENU_LOAD_ERR';

export const GET_CONTACTS   = 'GET_CONTACTS';