import styles from "./message.module.css";
export const MessageImage = () => {
  return (
    <div className={styles.messageImage}>
      <a
        href="https://images.unsplash.com/photo-1682687982468-4584ff11f88a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image_Link"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://images.unsplash.com/photo-1682687982468-4584ff11f88a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="message_image"
        />
      </a>
    </div>
  );
};
