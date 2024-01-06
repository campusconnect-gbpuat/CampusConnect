import styles from "./message.module.css";
import PdfIcon from "@material-ui/icons/FileCopy";
export const MessageDoc = ({ document }) => {
  const urlParts = document.split("/");

  const lastPart = urlParts[urlParts.length - 1];

  const decodedLastPart = decodeURIComponent(lastPart);

  const documentName = decodedLastPart.split("?")[0].split("/")[1];
  return (
    <div className={styles.messageDocs}>
      <div className={styles.docsInfo}>
        <a
          target="_blank"
          rel="noreferrer"
          href={document}
          className={styles.docsImage}
        >
          <img
            src="https://images.unsplash.com/photo-1682687982468-4584ff11f88a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="message_image"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={document}
          className={styles.docsName}
        >
          <span className={styles.docsIcon}>
            <PdfIcon />
          </span>
          <p>{documentName}</p>
        </a>
      </div>
      <div className={styles.docsButtons}>
        {/* two button */}
        <a
          href={document}
          target="_blank"
          rel="noreferrer"
          className={styles.button}
        >
          Open
        </a>
        <a href={document} download={document}>
          Save as..
        </a>
      </div>
    </div>
  );
};
