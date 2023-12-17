import { useContext } from "react";
import styles from "./sidebar.module.css";
import { useMediaQuery } from "react-responsive";
import { ChatContext } from "../../../context/chatContext/chatContext";
import chatStyles from "../chat.module.css";
export const Sidebar = () => {
  const { chatId } = useContext(ChatContext);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 996px)" });
  // Task need to be done
  //   1. fetch the userChats form firebase and render the chat
  //2. create a function for creating a new chat
  //3. search box for searching the chat list

  return (
    <div
      className={[
        chatId && isTabletOrMobile ? chatStyles.isActiveChat : [styles.sidebar],
      ]}
    >
      this is sidebar
    </div>
  );
};
