import { combineReducers } from 'redux'

import schedule from './schedule'
import knowledge from './knowledge'

export default combineReducers({
    schedule,
    knowledge
})