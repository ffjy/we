import { connect } from 'react-redux'

import Exercise from '../components/Exercise'

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, {})(Exercise)
