//import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
//import * as Actions from './actions'
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