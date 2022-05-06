const initialState = {
	number: 0,
	loadding: false,
	error: null,
};

const UP_REQUEST = 'COUNTER/UP_REQUEST';
const UP_SUCCESS = 'COUNTER/UP_SUCCESS';
const UP_FAULURE = 'COUNTER/UP_FAILURE';
const DOWN_REQUEST = 'COUNTER/DOWN_REQUEST';
const DOWN_SUCCESS = 'COUNTER/DOWN_SUCCESS';
const DOWN_FAULURE = 'COUNTER/DOWN_FAILURE';

export const up = (payload) => ({
	type: UP_REQUEST,
	payload,
});

export const up_failure = (payload) => ({
	type: UP_FAULURE,
	payload,
});

export const up_success = (payload) => ({
	type: UP_FAULURE,
	payload,
});

export const down = (payload) => ({
	type: DOWN_REQUEST,
	payload,
});

export const down_failure = (payload) => ({
	type: DOWN_FAULURE,
	payload,
});

export const down_success = (payload) => ({
	type: DOWN_SUCCESS,
	payload,
});

const counter = (state = initialState, action) => {
	switch (action.type) {
		case UP_REQUEST:
			return {
				...state,
				loadding: true,
				error: null,
			};
		case UP_SUCCESS:
			return {
				...state,
				loadding: false,
				number: state.number + 1,
			};
		case UP_FAULURE:
			return {
				...state,
				loadding: false,
				error: '접속에러',
			};
		case DOWN_REQUEST:
			return {
				...state,
				loadding: true,
				error: null,
			};
		case DOWN_SUCCESS:
			return {
				...state,
				loadding: false,
				number: state.number - 1,
			};
		case DOWN_FAULURE:
			return {
				...state,
				loadding: false,
				error: '접속에러',
			};
		default:
			return state;
	}
};

export default counter;
