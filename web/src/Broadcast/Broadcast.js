import React from "react";
import {Link} from "react-router-dom";
import {BroadcastList}  from "./BroadcastList";
import "../utils.css";
import "./Broadcast.css";

const Broadcast = (props) => {
    return (
        <div className="Broadcast-container u-flexcolumn">
            <BroadcastList/>
        </div>
    );
};

export default Broadcast;