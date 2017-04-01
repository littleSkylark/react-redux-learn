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

//不使用combineReducers时，state定义为对象如下，则获取为state.value
/*function counter(state={value:0},action) {
	switch(action.type){
		case 'ADD':
			return {value:state+1}
		case 'SUB':
			return {value:state-1}
		default:
			return state;
	}
}

export default counter*/

//containers中可直接用state获取值
/*function counter(state=0,action) {
	switch(action.type){
		case 'ADD':
			return state+1
		case 'SUB':
			return state-1
		default:
			return state;
	}
}

export default counter*/