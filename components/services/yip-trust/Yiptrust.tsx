import styles from "./Yiptrust.module.css";

type props = {
  text?: string;
  paragraph?: string;
  children?: any;
};

const Yiptrust = ({ text, paragraph, children }: props) => {
  return (
    <div className={styles.main}>
      <h3 className="heading__primary color__secondary">{text}</h3>
      {paragraph && <p>{paragraph}</p>}
      {children}
    </div>
  );
};

export default Yiptrust;
