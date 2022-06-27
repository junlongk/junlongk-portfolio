import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> Copyright 2022
        junlongk.com
      </p>
    </div>
  );
}
