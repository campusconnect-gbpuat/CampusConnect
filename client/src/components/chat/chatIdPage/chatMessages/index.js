import { Message } from "./Message";
import styles from "./chatmessages.module.css";
export const ChatMessages = () => {
  return (
    <div
      className={styles.chatBackground}
      style={{
        backgroundImage: `url(${"https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
      }}
    >
      <Message me type={"doc"} />
      <Message type={"doc"} />
      <Message me type={"text"} />
      <Message type={"img"} />
      <Message me type={"doc"} />
      <Message type={"img"} />
      <Message type={"text"} />
      <Message me type={"doc"} />
      <Message type={"text"} />
    </div>
  );
};
