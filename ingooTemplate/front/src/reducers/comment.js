const initialState = {
	id: 'ash991213',
	list: [],
	loadding: false,
	error: null,
};

const List_REQUEST = 'COMMENT/List_REQUEST';
const List_SUCCESS = 'COMMENT/List_SUCCESS';
const List_FAILURE = 'COMMENT/List_FAILURE';
const Write_REQUEST = 'COMMENT/WRITE_REQUEST';
const Write_SUCCESS = 'COMMENT/WRITE_SUCCESS';
const Write_FAILURE = 'COMMENT/WRITE_FAILURE';

export const list = (payload) => ({
	type: List_REQUEST,
	payload,
});

export const list_success = (payload) => ({
	type: List_SUCCESS,
	payload,
});

export const list_failure = (payload) => ({
	type: List_FAILURE,
	payload,
});

export const write = (payload) => ({
	type: Write_REQUEST,
	payload,
});

export const write_success = (payload) => ({
	type: Write_SUCCESS,
	payload,
});

export const write_failure = (payload) => ({
	type: Write_FAILURE,
	payload,
});

const comment = (state = initialState, action) => {
	switch (action.type) {
		case List_REQUEST:
			return {
				...state,
				loadding: true,
				error: null,
			};
		case List_SUCCESS:
			return {
				...state,
				loadding: true,
				error: null,
				list: action.payload,
			};
		case List_FAILURE:
			return {
				...state,
				loadding: false,
				error: 'Connection Error',
			};
		case Write_REQUEST:
			return {
				...state,
				loadding: true,
				error: null,
			};
		case Write_SUCCESS:
			return {
				...state,
				loadding: true,
				error: null,
				list: action.payload.result,
			};
		case Write_FAILURE:
			return {
				...state,
				loadding: false,
				error: 'Connection Error',
			};
		default:
			return state;
	}
};

export default comment;
