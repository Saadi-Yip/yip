import styles from "./description.module.css";

type prop ={
  text : string;
}
const BandwidthToolsText = ({text}:prop) => {
  return (
    <h2 className={styles.tool_text + " heading__primary"}>{text}</h2>
  )
}

export default BandwidthToolsText
