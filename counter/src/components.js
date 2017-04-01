import React,{Component,PropTypes} from 'react'

class Counter extends Component{
	static propTypes={
		value:PropTypes.number,
		add:PropTypes.func,
		decrement:PropTypes.func
	}

	asynAdd() {
	 	setTimeout(this.props.add,1000)
	}

	render(){
		const {value,add,decrement}=this.props
		return(
			<div>
				<p>点击：{value}次</p>
				<button onClick={add}>+</button>
				<button onClick={decrement}>-</button>
				<button onClick={this.asynAdd.bind(this)}>异步+</button>
			</div>
		)
	}
}

export default Counter