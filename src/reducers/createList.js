import { combineReducers } from 'redux'
import actionTypes from '../action-types/index';

const createList = (filter) => {
    const handleToggle = (state, action) => {
        const {result: toggleId, entities} = action.response;
        const {completed} = entities.todos[toggleId];
        const shouldRemove = (
            (completed && filter === 'active') ||
            (!completed && filter === 'completed')
        );
        return shouldRemove ? 
            state.filter(id => id != toggleId) :
            state;
    }
    
    const ids = (state = [], action) => {
        switch (action.type) {
            case actionTypes.RECEIVE_TODOS:
                return filter === action.filter ? 
                    action.response.result :
                    state;
            case actionTypes.ADD_TODO_SUCCESS:
                return filter !== 'completed' ? 
                    [...state, action.response.result] :
                    state;
            case actionTypes.TOGGLE_TODO_SUCCESS:
                return handleToggle(state, action);
            default:
                return state;
        }
    }

    const isFetching = (state= false, action) => {
        if (action.filter !== filter) {
            return state;
        }
        switch (action.type) {
            case actionTypes.REQUEST_TODOS:
                return true;
            case actionTypes.RECEIVE_TODOS:
            case actionTypes.RECEIVE_TODOS_FAIL:
                return false;
            default:
                return state;
        }
    }

    const errorMessage = (state=null, action) => {
        if (action.filter !== filter) {
            return state;
        }
        switch (action.type) {
            case actionTypes.RECEIVE_TODOS_FAIL:
                return action.message;
            case actionTypes.RECEIVE_TODOS:
            case actionTypes.REQUEST_TODOS:
                return null;
            default:
                return state;
        }
    }

    return combineReducers({
        ids,
        isFetching,
        errorMessage
    });
}

export default createList;

export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;