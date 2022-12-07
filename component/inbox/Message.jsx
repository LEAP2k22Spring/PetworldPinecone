import React, { useContext, useEffect, useRef } from "react";
import { useAuth } from "../../providers/AuthProvider";
import { ChatContext } from "../../context/ChatContext";
import { auth } from "../../firebase/useFirebase";

const Message = ({ message }) => {
  const { userData } = useAuth();
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === auth?.currentUser?.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === auth?.currentUser?.uid
              ? userData.avatar
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
