import { useState } from "react";
import styles from "./message.module.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { MessageDoc } from "./messageDoc";
import { MessageImage } from "./messageImage";
import { MessageText } from "./messageText";

const MessageComponent = {
  img: MessageImage,
  text: MessageText,
  doc: MessageDoc,
};
export const Message = ({ me, type }) => {
  // const me = true;
  // const me = false;
  const Component = MessageComponent[type];

  return (
    <div
      className={
        me ? `${styles.message} ${styles.yourMessage}` : styles.message
      }
    >
      <div className={me ? `${styles.hidden}` : styles.userAvatar}>
        {/* user avatar */}
        <img src="https://i.pravatar.cc/200" alt="user_avatar" />
      </div>
      <div className={styles.messageInfo}>
        <div className={styles.userName}>
          <p>
            {/* user name */}
            {me ? "You" : "Anmol Gangwar "}
          </p>
          <span className={!me ? `${styles.hidden}` : styles.verticalIcon}>
            <MoreVertIcon style={{ fontSize: "1rem" }} />
          </span>
        </div>
        <div className={styles.textOrDoc}>
          {/* actual message text or docs */}
          <Component />
          {/* messageImage div */}
          {/* {<MessageImage />} */}
          {/* docs components */}
          {/* <MessageDoc /> */}
        </div>
        <div className={styles.time}>
          {/* time  */}
          <span>9:30am</span>
        </div>
      </div>
    </div>
  );
};
