// side effects redux-saga/effects
import { all, fork } from 'redux-saga/effects'; // all 함수를 배열에 담아놓고 실행시킬수 있게 해줍니다.
import watchCounterUp from './counterSaga';
import watchList from './commentSaga';

export default function* rootSaga() {
	yield all([watchCounterUp(), watchList()]);
}
