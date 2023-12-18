import styles from "./chatheader.module.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
export const ChatHeader = () => {
  return (
    <div className={styles.chatHeader}>
      <div className={styles.user}>
        {/* userInfo  */}
        <div className={styles.avatar}>
          {/* avatar */}
          <img src="https://i.pravatar.cc/200" alt="user_avatar" />
        </div>
        <div className={styles.userInfo}>
          {/* userInfo and status */}
          <p>Anmol Gangwar</p>
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
