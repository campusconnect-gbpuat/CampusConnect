import { useContext, useEffect, useRef, useState } from "react";
import styles from "./message.module.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { MessageDoc } from "./messageDoc";
import { MessageImage } from "./messageImage";
import { MessageText } from "./messageText";
import { ModalContext } from "../../../../../context/modalContext";
import { ModalType } from "../../../../../context/modalContext/modalTypes";
import { AuthContext } from "../../../../../context/authContext/authContext";
import { MessageDeleted } from "./messageDeleted";

const MessageComponent = {
  image: MessageImage,
  text: MessageText,
  document: MessageDoc,
};
export const Message = ({ me, userData, message }) => {
  const Component = MessageComponent[message?.type];
  const [popOver, setPopOver] = useState(false);
  const { setModalState } = useContext(ModalContext);
  const authContext = useContext(AuthContext);
  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  // console.log(userData);

  const handleDeleteModal = () => {
    setPopOver(false);
    setModalState({
      type: ModalType.DeleteOrEdit,
      open: true,
      data: message,
    });
  };

  // console.log(message);

  const isMessageDeletedForMe = message.deletedFor.includes(
    authContext?.user._id
  );

  const isMessageDeletedForEveryone =
    message.deletedFor.includes(authContext?.user._id) &&
    message.deletedFor.includes(userData?.appUserId);

  // console.log(isMessageDeletedForMe, isMessageDeletedForEveryone);
  const isMessageDeletedByme = message.deletedFor.includes(message.senderId);
  const isOwnerofMessage = message.senderId === authContext.user._id;
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
          <span
            className={
              isMessageDeletedForMe ? `${styles.hidden}` : styles.verticalIcon
            }
          >
            <MoreVertIcon
              onClick={() => setPopOver(!popOver)}
              style={{ fontSize: "1rem", marginLeft: "1rem" }}
            />
            {popOver && !isMessageDeletedForMe && (
              <div className={styles.deleteOrEdit}>
                <span onClick={handleDeleteModal}>
                  delete
                  <DeleteIcon
                    onClick={() => setPopOver(!popOver)}
                    style={{ fontSize: "1rem", marginLeft: "4px" }}
                  />
                </span>
                {isOwnerofMessage && (
                  <span onClick={() => setPopOver(!popOver)}>
                    edit{" "}
                    <EditIcon
                      onClick={() => setPopOver(!popOver)}
                      style={{ fontSize: "1rem", marginLeft: "4px" }}
                    />
                  </span>
                )}
              </div>
            )}
          </span>
        </div>
        <div className={styles.textOrDoc}>
          {/* actual message text or docs */}
          {isMessageDeletedForMe ? (
            <MessageDeleted
              name={
                (me && isMessageDeletedForMe) || !isMessageDeletedByme
                  ? "You"
                  : `${userData?.name}`
              }
            />
          ) : (
            <Component {...{ [message["type"]]: message[message["type"]] }} />
          )}
        </div>
        <div className={styles.time}>
          {/* time  */}
          <span>9:30am</span>
        </div>
      </div>
    </div>
  );
};
