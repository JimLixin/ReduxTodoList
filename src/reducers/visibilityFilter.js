import actionTypes from '../action-types/index';

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case actionTypes.SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter