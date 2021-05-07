import ReactLoading from "react-loading";

import styles from "../styles/components/LoadingScreen.module.scss";

export function LoadingScreen() {
  return (
    <div className={styles.container}>
      <ReactLoading type={"bars"} color={"white"} width={124} height={124} />
    </div>
  );
}
