import React from 'react'


const Error = ({text}) => {
    return (
        <p className="alert alert-danger error">{text}</p>
    )
}

export default Error