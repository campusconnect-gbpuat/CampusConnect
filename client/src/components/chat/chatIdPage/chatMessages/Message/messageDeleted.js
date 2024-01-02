import styles from "./message.module.css";
export const MessageDeleted = ({ name }) => {
  return (
    <p style={{ whiteSpace: "pre-line", fontStyle: "italic" }}>
      {`${name} deleted this message`}
    </p>
  );
};
