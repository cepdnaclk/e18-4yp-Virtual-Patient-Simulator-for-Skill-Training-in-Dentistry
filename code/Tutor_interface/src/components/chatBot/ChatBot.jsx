import "./chatBot.scss";
import {Messages} from "../Components.jsx";

const ChatBot = ({ qaList }) => {
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>Jane</span>
            </div>
            <Messages qaList={qaList} />
        </div>
    );
};

export default ChatBot;