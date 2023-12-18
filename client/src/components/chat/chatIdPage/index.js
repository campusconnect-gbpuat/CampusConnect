import { ChatAction } from "./ChatAction";
import { ChatHeader } from "./ChatHeader";
import styles from "./chatIdPage.module.css";
import { ChatMessages } from "./chatMessages";

const ChatIdPage = () => {
  return (
    <div className={styles.chatIdPage}>
      <div className={styles.chatHeader}>
        {/*  chat header */}
        <ChatHeader />
      </div>
      <div className={styles.chatMessages}>
        {/* scrollable section for messages */}
        <ChatMessages />
      </div>
      <div className={styles.chatAction}>
        {/* input field section */}
        <ChatAction />
      </div>
    </div>
  );
};

export default ChatIdPage;
