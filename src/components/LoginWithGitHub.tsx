import { useContext, useEffect } from "react";
import { RepoConsultingContext } from "../contexts/RepoConsultingContext";
import styles from "../styles/components/LoginWithGithub.module.scss";

export function LoginWithGithub() {
  const { isLogged, authentificationWithGibHub } = useContext(
    RepoConsultingContext
  );

  useEffect(() => {
    const [, myUrl] = window.location.href.split("=");
    if (myUrl !== "" && myUrl !== null && myUrl !== undefined)
      authentificationWithGibHub();
  }, []);

  return (
    <div className={styles.LoginWithGithubContainer}>
      <div>
        <img src="/LogoCompasso.png" alt="Logo Compasso" />
        <a href="https://github.com/login/oauth/authorize?scope=user:email&client_id=494ba751b5d36b9ac67f&redirect_uri=http://localhost:3000/">
          <div>
            <span>Login with GitHub</span>
            <img src="icons/GitHub-Light.png" alt="Logo GitHub" />
          </div>
        </a>
      </div>
    </div>
  );
}
