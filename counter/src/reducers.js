import { combineReducers } from 'redux'

//reducer的名字即为该state的属性名(比如这个在containers中获取即为state.value)
function value(state=0,action) {
	switch(action.type){
		case 'ADD':
			return state+1
		case 'SUB':
			return state-1
		default:
			return state;
	}
}

export default combineReducers({
	value
})