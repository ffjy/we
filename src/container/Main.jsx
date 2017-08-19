import { connect } from 'react-redux'
import Main from '../components/Main'
import * as actions from '../actions'

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = {
    ...actions
}



export default connect(mapStateToProps, mapDispatchToProps)(Main)