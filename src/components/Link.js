import React from 'react'

class Link extends React.Component {
    render() {
        const {active, children, onClick} = this.props
        if(active){
            return (
                <span>
                    {children}
                </span>
            )
        }
        else{
            return (
                <a href='#' onClick={ e => {
                    e.preventDefault()
                    onClick()
                }}>
                    {children}
                </a>
            )
        }
    }
}

export default Link