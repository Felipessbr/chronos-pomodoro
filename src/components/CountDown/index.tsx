import { useTaskContexts } from "../../contexts/TaskContext/useTaskContext";
import styles from "./styles.module.css";

export function CountDown() {
  const { state } = useTaskContexts();
  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}
