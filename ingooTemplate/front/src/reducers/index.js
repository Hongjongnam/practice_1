import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import counter from './counter.js';
import comment from './comment.js';

// const rootReducer = combineReducers({
//     counter
// })

// const rootReducer = (state,action) => {
//     return {
//         number:0,
//         name:'ingoo'
//     }
// }

// const initialState = {
// 	number: 0,
// };

// const initialState = {
//     counter:{
//         number:0,
//         name:'ingoo'
//     },
//     comment:{
//         list:[]
//     }
// }

// const UP = 'COUNTER/UP'
// const DOWN = 'COUNTER/DOWN'

// export const up = createAction(UP)
// export const down = createAction(DOWN)

// const rootReducer = handleActions({
//         [UP]: (state, action) => ({ number: state.number+1 }),
//         [DOWN]: (state, action) => ({ number: state.number-1 })
//     },
//     initialState
// )

const rootReducer = combineReducers({ counter, comment });

// const rootReducer = (state = initialState,action) => {
//     switch(action.type){
//         case UP:
//             return {
//                 ...state,
//                 number:state.number + 1
//             }
//         case DOWN:
//             return {
//                 ...state,
//                 number:state.number - 1
//             }
//         default:
//             return state
//     }
// }

export default rootReducer;
