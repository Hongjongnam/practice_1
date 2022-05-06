import { takeLatest, call, put } from 'redux-saga/effects';

async function upAPI(payload) {
	console.log(payload);
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(true);
		}, 1000);
	});
}

// take 매서드로 호출된 함수는 action 값 전체를 보내줍니다.
// { type:up , payload:{ userid:"test", content:"테스트입니다." }}
function* counterUp(action) {
	// API 내용
	try {
		// call 인자값이 2개
		// 첫번째는 함수명
		// 두번째는 첫번째 함수에 대한 인자값
		const result = yield call(upAPI, action.payload);
		// dispatch
		yield put({
			type: 'COUNTER/UP_SUCCESS',
		});
	} catch (e) {
		// dispatch
		yield put({
			type: 'COUNTER/UP_FAILURE',
		});
	}
}

async function downAPI(payload) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(true);
		}, 1000);
	});
}

function* counterDown(action) {
	try {
		yield call(downAPI, action.payload);
		yield put({
			type: 'COUNTER/DOWN_SUCCESS',
		});
	} catch (e) {
		yield put({
			type: 'COUNTER/DOWN_FAILURE',
		});
	}
}

// action 값을 추적하는 용도 -> { type:up }
export default function* watchCounterUp() {
	// take 인자값이 2개
	// 첫번째 인자값은 action.type 내용 { type:up } -> up
	// 두번째 인자값은 type이 추적이 되었다면 실행 할 함수명 - function* 함수여야 합니다.
	yield takeLatest('COUNTER/UP_REQUEST', counterUp);
	yield takeLatest('COUNTER/DOWN_REQUEST', counterDown);
}
