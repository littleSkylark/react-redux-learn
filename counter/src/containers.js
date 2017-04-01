import {connect} from 'react-redux'
import {add,decrement} from './actions'
import Counter from './components'

const mapStateToProps=(state)=>({
	value:state.value
})

const mapDispatchToProps= {
	add:add,
	decrement:decrement
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)