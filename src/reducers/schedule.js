import * as types from '../actions/action-types'

const schedule = (
    state = {
        index: 0,
        options: [{ id: '#1', name: '地理' }, { id: '#2', name: '技术' }, { id: '#3', name: '英语' }]
    }, action) => {
        switch (action.type) {

            case types.CHANGE_INDEX:
                return {
                    ...state,
                    index: action.value
                }

            case types.SET_OPTIONS:
                return {
                    ...state,
                    options: action.value
                }

            case types.PUSH_SCHEDULE:
                return {
                    ...state,
                    options: [
                        ...state.options,
                        action.value
                    ]
                }

            case types.DELETE_SCHEDULE:
                return {
                    ...state,
                    options: [
                        ...state.slice(0, action.value),
                        ...state.slice(action.value + 1)
                    ]
                }

            default:
                return state
        }
    }

export default schedule