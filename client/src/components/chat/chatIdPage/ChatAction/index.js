import styles from "./chataction.module.css";
import EmojiEmotions from "@material-ui/icons/EmojiEmotionsOutlined";
import DockOutlined from "@material-ui/icons/FileCopy";
import Telegram from "@material-ui/icons/Telegram";
import { useContext, useEffect, useRef, useState } from "react";
import { EmojiPicker } from "../../../EmojiPicker";
import { ChatContext } from "../../../../context/chatContext/chatContext";
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../../utils/config/firebase";
import { v4 as uuid } from "uuid";
import { AuthContext } from "../../../../context/authContext/authContext";
export const ChatAction = ({ userData }) => {
  const textAreaRef = useRef();
  const [emojiPopover, setEmojiPopover] = useState(false);
  const [docsPopover, setDocsPopover] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const { chatId } = useContext(ChatContext);
  const authContext = useContext(AuthContext);

  const onChangeTextField = (e) => {
    e.preventDefault();
    setInputVal(e.target.value);
  };

  useEffect(() => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }, [inputVal]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setInputVal((prev) => prev + "\n");
    }
  };
  console.log(inputVal);
  const handleSendMessage = async () => {
    if (inputVal) {
      const messageId = uuid();
      try {
        await updateDoc(doc(db, "chats", chatId), {
          messages: arrayUnion({
            messageId: messageId,
            type: "text",
            text: inputVal,
            deletedFor: [],
            senderId: authContext.user._id,
            date: Timestamp.now(),
          }),
        });
        await updateDoc(doc(db, "userChats", authContext.user._id), {
          [chatId + ".lastMessage"]: {
            type: "text",
            text: inputVal,
            deletedFor: [],
            messageId: messageId,
            senderId: authContext?.user?._id,
          },
          [chatId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", userData?.appUserId), {
          [chatId + ".lastMessage"]: {
            type: "text",
            text: inputVal,
            deletedFor: [],
            messageId: messageId,
            senderId: authContext?.user?._id,
          },
          [chatId + ".date"]: serverTimestamp(),
        });
      } catch (error) {
        console.log(error);
      } finally {
        setInputVal("");
        setEmojiPopover(false);
      }
    }
  };

  return (
    <div className={styles.chatAction}>
      <div className={styles.actionButton}>
        {/* emoji-mart */}
        <button
          onClick={() => setEmojiPopover(!emojiPopover)}
          className={styles.icon}
        >
          <EmojiEmotions />
        </button>
        <button
          onClick={() => setDocsPopover(!docsPopover)}
          className={styles.icon}
        >
          <DockOutlined />
        </button>

        <div
          className={
            emojiPopover
              ? `${styles.popover} ${styles.popovershow}`
              : styles.popover
          }
        >
          <EmojiPicker onChange={setInputVal} />
        </div>
        <div
          className={
            docsPopover
              ? `${styles.popover} ${styles.popovershow}`
              : styles.popover
          }
        ></div>

        {/* documents */}
      </div>
      <div className={styles.inputField}>
        {/* input field */}
        <textarea
          ref={textAreaRef}
          value={inputVal}
          onChange={onChangeTextField}
          placeholder="Type a message"
          type="text"
          onKeyDown={handleKeyDown}
          spellCheck="false"
          minLengthLength={1}
          rows={1}
          autoFocus={true}
        ></textarea>
      </div>
      <button onClick={handleSendMessage} className={[styles.icon]}>
        <Telegram />
      </button>
    </div>
  );
};
