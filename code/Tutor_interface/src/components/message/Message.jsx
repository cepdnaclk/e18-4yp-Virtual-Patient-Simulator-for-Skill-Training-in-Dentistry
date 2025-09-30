import React from 'react'
import './message.scss'

const Message = ({ content, owner }) => {
    return (
        <div className={`message ${owner ? 'owner' : ''}`}>
            <div className="messageContent">
                <p>{content}</p>
            </div>
        </div>
    );
};
export default Message
