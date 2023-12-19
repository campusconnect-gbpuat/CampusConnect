import { useContext } from "react";
import { ChatAction } from "./ChatAction";
import { ChatHeader } from "./ChatHeader";
import styles from "./chatIdPage.module.css";
import { ChatMessages } from "./chatMessages";
import { ChatContext } from "../../../context/chatContext/chatContext";
import { useGetUserData } from "../../../hooks/useGetUserData";

const ChatIdPage = () => {
  const { talkingWithId } = useContext(ChatContext);
  const userData = useGetUserData(talkingWithId);
  console.log(userData);
  return (
    <div className={styles.chatIdPage}>
      <div className={styles.chatHeader}>
        {/*  chat header */}
        <ChatHeader userData={userData} />
      </div>
      <div className={styles.chatMessages}>
        {/* scrollable section for messages */}
        <ChatMessages userData={userData} />
      </div>
      <div className={styles.chatAction}>
        {/* input field section */}
        <ChatAction userData={userData} />
      </div>
    </div>
  );
};

export default ChatIdPage;
