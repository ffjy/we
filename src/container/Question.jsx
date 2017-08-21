import Question from '../components/Question'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, {})(Question)