import React, { useContext } from "react";
import styles from "./sidebar.module.css";
import { ChatContext } from "../../../context/chatContext/chatContext";
import { useGetUserData } from "../../../hooks/useGetUserData";
import { AuthContext } from "../../../context/authContext/authContext";
import ImageIcon from "@material-ui/icons/ImageOutlined";
import FileCopyOutlined from "@material-ui/icons/FileCopyOutlined";
const SidebarItem = ({ chat }) => {
  const { setTalkingWithId, setChatId, chatId } = useContext(ChatContext);
  const authContext = useContext(AuthContext);
  const handleSelect = () => {
    localStorage.setItem("chatId", chat?.chatId);
    localStorage.setItem("talkingWithId", chat?.talkingWith?.userId);
    setChatId(chat?.chatId);
    setTalkingWithId(chat?.talkingWith?.userId);
  };

  const userData = useGetUserData(chat?.talkingWith?.userId);

  const activeChat = chatId === chat?.chatId;

  const isDeletedByMe = chat?.lastMessage?.deletedFor.includes(
    authContext?.user._id
  );

  console.log(isDeletedByMe);

  const renderText = () => {
    if (!isDeletedByMe && chat?.lastMessage?.deletedFor.length > 0) {
      return <p>{`${userData?.name.split(" ")[0]} deleted this message`}</p>;
    }

    if (isDeletedByMe && chat?.lastMessage?.deletedFor.length > 0) {
      return (
        <p style={{ fontStyle: "italic", fontWeight: 600, color: "grey" }}>
          You deleted this message
        </p>
      );
    }

    return (
      <>
        {chat?.lastMessage && chat?.lastMessage.type === "image" ? (
          <ImageIcon />
        ) : chat?.lastMessage && chat?.lastMessage.type === "document" ? (
          <FileCopyOutlined />
        ) : (
          ""
        )}
        <p>
          {chat?.lastMessage && chat?.lastMessage.type === "image"
            ? "Image"
            : chat?.lastMessage && chat?.lastMessage.type === "document"
            ? "anmol.pdf"
            : chat?.lastMessage && chat?.lastMessage.type === "text"
            ? `${chat?.lastMessage[chat?.lastMessage["type"]]}`
            : ""}
        </p>
      </>
    );
  };

  return (
    <div
      className={
        activeChat
          ? `${styles.SidebarItem} ${styles.SidebarItemActive}`
          : styles.SidebarItem
      }
      onClick={handleSelect}
    >
      <div className={styles.avatar}>
        {/*avatar div  */}
        <img src={`${userData?.photoUrl}`} alt="user_avatar" />
      </div>
      <div className={styles.SidebarRight}>
        {/* right section */}
        <div className={styles.SidebarRightTop}>
          {/* right top */}
          <p>{`${userData?.name}`}</p>
          <span>9:30am</span>
        </div>
        <div className={styles.SidebarRightBottom}>
          {/* right bottom */}

          <div className={styles.SidebarRightBottomLeft}>
            <span>
              {chat?.lastMessage
                ? chat?.lastMessage?.senderId === authContext.user._id
                  ? "you:"
                  : `${userData?.name.split(" ")[0]}:`
                : ""}
            </span>
            {/*  check the deletedFor Id is the id is currentUser then you else name */}

            {/* <p style={{ fontStyle: "italic" }}>
              {chat?.lastMessage
                ? chat?.lastMessage?.senderId === authContext.user._id &&
                  isDeletedForMe
                  ? "You deleted this message"
                  : `${userData?.name.split(" ")[0]} deleted this message`
                : ""}
            </p> */}
            {renderText()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarItem;
