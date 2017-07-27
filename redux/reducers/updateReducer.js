const initialstate = {
	updating: false,
	update_success: false,
	update_failed: false,
};
export function updateReducer(state = initialstate, action) {
	switch (action.type) {
	case "UPDATING":
		return {...state, updating: true };
	case "AVATAR_UPDATE_FULLFILLED":
		return {...state, update_success: true, updating: false };
	case "AVATAR_UPDATE_REJECTED":
		return {...state, update_failed: true, updating: false };
	default:
		return state;
	}
}