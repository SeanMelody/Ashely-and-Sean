import React from 'react'

const Members = (props) => {
    return (
        <div className="col-md-5">
            <img
                className="timeline img-thumbnail"
                src={props.img} alt={props.name}></img>
            <h3>{props.name}</h3>
            <h5>{props.title}</h5>
            <p>{props.bio}</p>

        </div>
    )
}

export default Members
