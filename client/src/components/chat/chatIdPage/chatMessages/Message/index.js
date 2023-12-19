import { useEffect, useRef, useState } from "react";
import styles from "./message.module.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { MessageDoc } from "./messageDoc";
import { MessageImage } from "./messageImage";
import { MessageText } from "./messageText";

const MessageComponent = {
  image: MessageImage,
  text: MessageText,
  document: MessageDoc,
};
export const Message = ({ me, userData, message }) => {
  const Component = MessageComponent[message?.type];
  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  console.log(userData);

  return (
    <div
      ref={scrollRef}
      className={
        me ? `${styles.message} ${styles.yourMessage}` : styles.message
      }
    >
      <div className={me ? `${styles.hidden}` : styles.userAvatar}>
        {/* user avatar */}
        <img src={`${userData?.photoUrl}`} alt="user_avatar" />
      </div>
      <div
        className={
          me
            ? `${styles.messageInfo} ${styles.meArc}`
            : `${styles.messageInfo} ${styles.otherArc}`
        }
      >
        <div className={styles.userName}>
          <p>{me ? "You" : `${userData?.name}`}</p>
          <span className={!me ? `${styles.hidden}` : styles.verticalIcon}>
            <MoreVertIcon style={{ fontSize: "1rem" }} />
          </span>
        </div>
        <div className={styles.textOrDoc}>
          {/* actual message text or docs */}
          <Component {...{ [message["type"]]: message[message["type"]] }} />
        </div>
        <div className={styles.time}>
          {/* time  */}
          <span>9:30am</span>
        </div>
      </div>
    </div>
  );
};
