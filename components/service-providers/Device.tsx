import styles from "./service-card.module.css";

type Props = {
  name: string;
  handleClickOnDelete: (id: string) => void;
};

const Device = ({
  name,
  handleClickOnDelete,
  handleOnDeviceQuantityChange,
  deviceId,
}: any) => {
  return (
    <div className={styles.device}>
      <button onClick={handleClickOnDelete}>&#x2715;</button>
      <span style={{ textTransform: "capitalize" }}>{name}</span>
      <input
        type="number"
        placeholder="enter number"
        defaultValue={1}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleOnDeviceQuantityChange(e.target.value, deviceId);
        }}
      />
    </div>
  );
};

export default Device;
