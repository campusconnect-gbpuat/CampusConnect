import styles from "./chataction.module.css";
import EmojiEmotions from "@material-ui/icons/EmojiEmotionsOutlined";
import DockOutlined from "@material-ui/icons/FileCopy";
import Telegram from "@material-ui/icons/Telegram";
export const ChatAction = () => {
  return (
    <div className={styles.chatAction}>
      <div className={styles.actionButton}>
        {/* emoji-mart */}
        <button className={styles.icon}>
          <EmojiEmotions />
        </button>
        <button className={styles.icon}>
          <DockOutlined />
        </button>
        {/* documents */}
      </div>
      <div className={styles.inputField}>
        {/* input field */}
        <input placeholder="Type a message" type="text" autoFocus />
      </div>
      <button className={[styles.icon]}>
        <Telegram />
      </button>
    </div>
  );
};
