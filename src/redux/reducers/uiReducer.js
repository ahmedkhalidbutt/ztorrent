import { SET_LOADING, UNSET_LOADING } from "../types";

const initialState = {
	loading: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_LOADING:
			return { ...state, loading: true };
		case UNSET_LOADING:
			return { ...state, loading: false };
		default:
			return state;
	}
};
