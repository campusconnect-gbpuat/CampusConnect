import styles from "./message.module.css";
import PdfIcon from "@material-ui/icons/FileCopy";
export const MessageDoc = () => {
  return (
    <div className={styles.messageDocs}>
      <div className={styles.docsInfo}>
        <div className={styles.docsImage}>
          <img
            src="https://images.unsplash.com/photo-1682687982468-4584ff11f88a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="message_image"
          />
        </div>
        <div className={styles.docsName}>
          <span className={styles.docsIcon}>
            <PdfIcon />
          </span>
          <p>
            This is a pdf
            skdhfkshdfkhsdkfhskdhfksdhfkjshdfkhsdkfhksdhfksdhfkjshdfkhsdkfhskd
          </p>
        </div>
      </div>
      <div className={styles.docsButtons}>
        {/* two button */}
        <a
          href="https://www.oasisacademysouthbank.org/uploaded/South_Bank/Curriculum/Student_Learning/Online_Library/KS3/Harry_potter/03_Harry_Potter_and_the_Prisoner_of_Azkaban_by_J.K._Rowling.pdf"
          target="_blank"
          rel="noreferrer"
          className={styles.button}
        >
          Open
        </a>
        <a
          href="https://www.oasisacademysouthbank.org/uploaded/South_Bank/Curriculum/Student_Learning/Online_Library/KS3/Harry_potter/03_Harry_Potter_and_the_Prisoner_of_Azkaban_by_J.K._Rowling.pdf"
          download="Harry_Potter_and_the_Prisoner_of_Azkaban.pdf"
        >
          Save as..
        </a>
      </div>
    </div>
  );
};
