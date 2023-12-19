import styles from "./chatheader.module.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowBack from "@material-ui/icons/ArrowBack";

import { useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { ChatContext } from "../../../../context/chatContext/chatContext";

export const ChatHeader = ({ userData }) => {
  // console.log(userData);

  const { setChatId, setTalkingWithId } = useContext(ChatContext);
  const handleArrowBack = () => {
    localStorage.removeItem("chatId");
    localStorage.removeItem("talkingWithId");
    setChatId("");
    setTalkingWithId("");
  };
  return (
    <div className={styles.chatHeader}>
      <div className={styles.user}>
        {/* userInfo  */}
        <div className={styles.ArrowBack}>
          <ArrowBack onClick={handleArrowBack} />
          <div className={styles.avatar}>
            {/* avatar */}

            <img src={`${userData?.photoUrl}`} alt="user_avatar" />
          </div>
        </div>
        <div className={styles.userInfo}>
          {/* userInfo and status */}
          <p>{`${userData?.name}`}</p>
          <span>Online</span>
        </div>
      </div>
      <div className={styles.chatSettings}>
        {/* chat Settings */}
        <MoreVertIcon />
      </div>
    </div>
  );
};
