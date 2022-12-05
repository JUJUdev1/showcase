import React from "react";

import styles from "../styles/Global";
import assets from "../assets";

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>
            Vous pouvez télécharger l'application ici !
          </h1>
          <p className={`${styles.pText} ${styles.blackText}`}>
            Vous pouvez trouver le code source de l'application sur Github
          </p>
        </div>
        <button className={styles.btnPrimary}>Code Source </button>
        <div className={styles.flexCenter}>
          <img
            src={assets.scene}
            alt="downmload_png"
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
