import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

async function listAPI() {
	return await axios.post('http://localhost:3500/comment/list', null);
}

function* commentList() {
	try {
		const result = yield call(listAPI);

		yield put({
			type: 'COMMENT/List_SUCCESS',
			payload: result.data.result,
		});
	} catch (e) {
		yield put({
			type: 'COMMENT/List_FAILURE',
		});
	}
}

async function writeAPI(payload) {
	const body = {
		id: 'ash991213',
		UserId: '1',
		content: payload,
	};
	return await axios.post('http://localhost:3500/comment/write', body);
}

function* commentWrite(action) {
	try {
		const result = yield call(writeAPI, action.payload);

		yield put({
			type: 'COMMENT/WRITE_SUCCESS',
			payload: result.data,
		});
	} catch (e) {
		yield put({
			type: 'COMMENT/WRITE_FAILURE',
		});
	}
}

export default function* watchList() {
	yield takeLatest('COMMENT/List_REQUEST', commentList);
	yield takeLatest('COMMENT/WRITE_REQUEST', commentWrite);
}
