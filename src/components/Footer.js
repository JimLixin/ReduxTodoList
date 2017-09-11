import React from 'react'
import FilterLink from '../containers/FilterLink'

class Footer extends React.Component{
    render(){
        return (
            <p>
                Show:
                {' '}
                <FilterLink filter="all">
                    All
                </FilterLink>
                {', '}
                <FilterLink filter="active">
                    Active
                </FilterLink>
                {', '}
                <FilterLink filter="completed">
                    Completed
                </FilterLink>
            </p>
        )
    }
}

export default Footer