import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import * as actions from '../actions'
import TodoList from '../components/TodoList'
import {getVisibleTodos, getIsFetching, getErrorMessage} from '../reducers'
import FetchError from '../components/FetchError'


class VisibleTodoList extends React.Component{
    componentDidMount() {
       this.fetchData();
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.filter !== prevProps.filter){
            this.fetchData();
        }
    }

    fetchData(){
        const {filter, requestTodos, fetchTodos} = this.props;
        // requestTodos(filter);
        fetchTodos(filter).then(() => console.log('Fetch data done!'));
    }

    render(){
        const {toggleTodo, todos, isFetching, errorMessage} = this.props;
        if( isFetching && !todos.length){
            return <p>Loading...</p>;
        }
        if(errorMessage && !todos.length){
            return (
                <FetchError message={errorMessage} onRetry={() => this.fetchData() } />
            )
        }
        return <TodoList todos={todos} onTodoClick={toggleTodo} />
    }
}

const mapStateToProps = (state, {params}) => {
    const filter = params.filter||'all';
    return {
        todos: getVisibleTodos(state, filter),
        isFetching: getIsFetching(state, filter),
        errorMessage: getErrorMessage(state, filter),
        filter
    }
};

const mapDispatchToProps = dispatch => ({
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    });

export default withRouter(connect(
        mapStateToProps, 
        actions
    )(VisibleTodoList));