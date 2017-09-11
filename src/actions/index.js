import actionTypes from '../action-types/index';
import * as api from '../api'
import { normalize } from 'normalizr'
import * as schema from './schema'
import { getIsFetching } from '../reducers'

//Simplified form same as the 'toggleTodo' function
export const addTodo = (text) => (dispatch) =>
    api.addTodo(text).then(response => {
        // console.log('normalized response is:', normalize(response, schema.todo));
        dispatch({
            type: actionTypes.ADD_TODO_SUCCESS,
            response: normalize(response, schema.todo)
        });
    });

export const toggleTodo = (id) => (dispatch) =>
    api.toggleTodo(id).then(response => {
        dispatch({
            type: actionTypes.TOGGLE_TODO_SUCCESS,
            response: normalize(response, schema.todo)
        });
    });

export const fetchTodos = (filter) => (dispatch, getState) => {
    if (getIsFetching(getState(), filter)) {
        return Promise.resolve();
    }
    dispatch({
        type: actionTypes.REQUEST_TODOS,
        filter
    });
    return api.fetchTodos(filter).then(response => {
            // console.log('normalized response is:', normalize(response, schema.arrayOfTodos));
            dispatch({
                type: actionTypes.RECEIVE_TODOS,
                filter,
                response: normalize(response, schema.arrayOfTodos)
            });
        },
        error => {
            dispatch({
                type: actionTypes.RECEIVE_TODOS_FAIL,
                filter,
                message: error.message || 'Something went wrong.'
            })
        }
    );
}