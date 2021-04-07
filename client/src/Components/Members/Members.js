import React from 'react'

const Members = (props) => {
    return (
        <div className="col-md-5">
            <img
                className="border-dark img-thumbnail"
                src={props.img} alt={props.name}></img>
            <h2 className="google-font">{props.name}</h2>
            <h3 className="google-font-reg">{props.title}</h3>
            <p>{props.bio}</p>

        </div>
    )
}

export default Members
