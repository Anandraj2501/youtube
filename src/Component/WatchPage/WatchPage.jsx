import { useParams } from "react-router-dom";
import "./Watchpage.css"
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect, useRef, useState } from "react";
import { makeRandomMessage } from "../../Utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../Utils/ChatSlice";
import CommentsContainer from "../Comments/CommentsContainer";

const WatchPage = () => {
    const { id } = useParams();
    const [liveMessages, setLiveMessages] = useState("");
    const dispatch = useDispatch();
    const chatContainerRef = useRef(null);
    const messages = useSelector((state) => state.chat.message);

    useEffect(() => {
        const i = setInterval(() => {
            // API Polling

            dispatch(
                addMessage(
                    makeRandomMessage(20) + " 🚀",
                )
            );
        }, 2000);

        return () => clearInterval(i);
    }, [])
    useEffect(() => {
        // Scroll chat container to the bottom when new message appears
        scrollToBottom();
    }, [messages]);
    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };

    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="watchpage-container">
                <div className="left-container">
                    <div className="iframe-container">
                        <iframe
                            src={`https://www.youtube.com/embed/${id}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="info-container">
                        <span className="watchvideo-name">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum quod quia ea molestiae sunt dolorum atque suscipit unde cumque.
                        </span>
                        <span className="views">
                            1M Views
                        </span>
                    </div>
                    <div className="comment-container">
                        <CommentsContainer/>
                    </div>
                </div>
                <div className="right-container">
                    <div className="live-chat-container">
                        <div className="live-chat">
                            <span>
                                Live Chat
                            </span>
                        </div>
                        <div className="live-chat-box" ref={chatContainerRef}>
                            {
                                messages.map((mssg, index) => (
                                    <div key={index} className="chats">{mssg}</div>
                                ))
                            }
                        </div>
                    </div>
                    <form
                        className="live-message"
                        onSubmit={(e) => {
                            e.preventDefault();

                            dispatch(
                                addMessage( liveMessages,
                                )
                            );
                            setLiveMessages("");
                        }}
                    >
                        <input
                            className="live-text"
                            type="text"
                            value={liveMessages}
                            onChange={(e) => {
                                setLiveMessages(e.target.value);
                            }}
                        />
                        <button className="liveadd-btn">Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default WatchPage;