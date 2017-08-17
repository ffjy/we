import { connect } from 'react-redux'

import Knowledge from '../components/Knowledge'

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps, {})(Knowledge)