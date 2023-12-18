import React from "react";
import styles from "./sidebar.module.css";
const SidebarItem = () => {
  return (
    <div className={styles.SidebarItem}>
      <div className={styles.avatar}>
        {/*avatar div  */}
        <img src="https://i.pravatar.cc/200" alt="user_avatar" />
      </div>
      <div className={styles.SidebarRight}>
        {/* right section */}
        <div className={styles.SidebarRightTop}>
          {/* right top */}
          <p>Anmol Gangwar</p>
          <span>9:30am</span>
        </div>
        <div className={styles.SidebarRightBottom}>
          {/* right bottom */}

          <div className={styles.SidebarRightBottomLeft}>
            <span>You:</span>
            <p>
              {" "}
              using browser developer tools to see the applied styles and check
              for any conflicting styles that might{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarItem;
