import { useContext } from "react";
import styles from "./sidebar.module.css";
import { useMediaQuery } from "react-responsive";
import { ChatContext } from "../../../context/chatContext/chatContext";
import chatStyles from "../chat.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SidebarItem from "./SidebarItem";

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
      <div className={styles.sidebarFixedContainer}>
        {/*  */}
        <div className={styles.Heading}>
          <h2>Your Messages</h2>
        </div>
        <div className={styles.InputContainer}>
          <FontAwesomeIcon icon={faSearch} className={styles.faSearch} />
          <input placeholder="search..." />
        </div>
      </div>
      {/* scrollable list  */}
      <div className={styles.scrollableContainer}>
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
      </div>
    </div>
  );
};
