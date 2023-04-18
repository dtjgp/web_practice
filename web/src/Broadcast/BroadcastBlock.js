import React from "react";
import "../utils.css";


const SingleBroadcast = (props) => {
    return(
        <div className="">
            <div>{props.time}</div>
            <div>{props.content}</div>
        </div>
    )
};

const EmptyBroadcastBlock = (props) => {

};

const BroadcastBlock = (props) => {
    defaultBlock = {content:"", time:""};
    const [broadcastBlock, setBroadcastBlock] = useState({defaultBlock});

    if(props.broadcast){
        setBroadcastBlock(props.broadcast);
    };
    
    return (
        <div>
            <SingleBroadcast 
                content = {broadcastBlock.content}
                time = {broadcastBlock.time}
            />
        </div>
    );
};

export default BroadcastBlock;