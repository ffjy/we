import * as types from '../actions/action-types'

const knowledge = (state = {}, action) => {
    switch (action.type) {
        case types.SAVE_KNOWLEDGE:
            return action.value
        default:
            return state
    }
}

export default knowledge