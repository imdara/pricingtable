import React from "react";

function Card (props) {
    return (
    <>
    <div className="card">
    <div className="card-body">
    <h3 className="card-title text-muted text-uppercase text-center">{props.name}</h3>
    <h4 className="card-price text-center">${props.price}<span className="period">/month</span></h4>
    <hr/>
    <ul className="fa-ul">
        <li className={props.text[0]}><span className="fa-li"><i className={props.mode[0]}></i></span><b>{props.user}</b></li>
        <li className={props.text[1]}><span className="fa-li"><i className={props.mode[1]}></i></span><b>{props.storage}</b></li>
        <li className={props.text[2]}><span className="fa-li"><i className={props.mode[2]}></i></span>Unlimited Public Projects</li>
        <li className={props.text[3]}><span className="fa-li"><i className={props.mode[3]}></i></span>Community Access</li>
        <li className={props.text[4]}><span className="fa-li"><i className={props.mode[4]}></i></span>Unlimited Private Projects</li>
        <li className={props.text[5]}><span className="fa-li"><i className={props.mode[5]}></i></span>Dedicated Phone Support</li>
        <li className={props.text[6]}><span className="fa-li"><i className={props.mode[6]}></i></span><b>{props.domain}</b></li>
        <li className={props.text[7]}><span className="fa-li"><i className={props.mode[7]}></i></span>Monthly Status Reports</li>
    </ul>
    <div class="d-grid">
    <a href="#" class="btn btn-primary text-uppercase">Button</a>
    </div>
    </div>
    </div>
    </>);
}

export default Card;