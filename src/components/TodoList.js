import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component{
    render(){
        const { todos, onTodoClick} = this.props;
        if(todos === undefined){
            return (<ul></ul>);
        }
        return (
            <ul>
                {todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />)}
            </ul>
        )
    }
}

export default TodoList;