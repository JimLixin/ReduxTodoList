// import React from 'react'
// import { connect } from 'react-redux'
// import { setVisibilityFilter } from '../actions'
// import Link from '../components/Link'

// class FilterLink extends React.Component {
//     render() {
//         return (
//             <Link active={this.props.active} onClick={this.props.onClick} children={this.props.children} />
//         )
//     }
// }

// const mapStateToProps = (state, ownProps) =>{
//     return {
//         active: ownProps.filter === state.visibilityFilter
//     }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         onClick: () =>{
//             dispatch(setVisibilityFilter(ownProps.filter))
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(FilterLink)


import React from 'react'
import {Link} from 'react-router'

const FilterLink = ({filter, children}) => (
    <Link exact to={filter} activeStyle={{textDecoration: 'none', color:'black'}}>
        {children}
    </Link>
);

export default FilterLink;