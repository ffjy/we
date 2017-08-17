import * as types from './action-types'

export const change_schedule_index = (index) => ({
    type: types.CHANGE_INDEX,
    value: index
})

export const set_schedule_options = (options) => ({
    type: types.SET_OPTIONS,
    value: options
})

export const push_schedule = (schedule) => ({
    type: types.PUSH_SCHEDULE,
    value: schedule
})

export const delete_schedule = (index) => ({
    type: types.DELETE_SCHEDULE,
    value: index
})