import React, {useState} from "react";
import "../utils.css";
import BroadcastBlock from "./BroadcastBlock";

const EmptyList = (props)   => {
    return (
        <h3>There are no broadcasts to show</h3>
    );
};

const BroadcastList = (props) => {
    const [broadcastList, setBroadcastsList] = useState([]);
    
    if(broadcastList.length === 0)
        return <EmptyList/>;

    return (
        <div>
            broadcastList.map({
            (broadcast, index) => <BroadcastBlock key={index} broadcast={broadcast}/>
            })
        </div>
    );
};

export default BroadcastList; 