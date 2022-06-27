import React from 'react';
import { Link } from 'react-router-dom';

const LinkCard = (props) => {
    return (
        <div className="card admin-card col mx-4 mt-3">
            <img src={props.imgsrc} height='130' className="card-img-top mt-1" alt="Image 1"></img>
            <div className="card-body">
                <h5 className="card-title"><small>{props.title}</small></h5>
                <p className="card-text"><small>{props.para}</small></p>
                <Link to={props.path} className="btn btn-outline-success">Go</Link>
            </div>
        </div>
    );
};

export default LinkCard;