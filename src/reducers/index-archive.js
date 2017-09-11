import { combineReducers } from 'redux'
import todos, * as fromTodos from './todos'

const rootReducer = combineReducers({
    todos
})

export default rootReducer

export const getVisibleTodos = (state, filter) => {
    return fromTodos.getVisibleTodos(state, filter);
}