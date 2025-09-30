import React from 'react';
import './messages.scss';
import Message from "../message/Message.jsx";


const Messages = ({ qaList }) => {
    return (
        <div className="messages">
            {qaList.map((qa, index) => (
                <React.Fragment key={index}>
                    <Message content={qa.question} owner={false} />
                    <Message content={qa.answer} owner={true} />
                </React.Fragment>
            ))}
        </div>
    );
};

export default Messages;