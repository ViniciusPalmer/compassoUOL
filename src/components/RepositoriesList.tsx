import { useContext } from "react";
import { RepoConsultingContext } from "../contexts/RepoConsultingContext";

import styles from "../styles/components/RepositoriesList.module.scss";

export function RepositoriesList() {
  const { repoStorage } = useContext(RepoConsultingContext);
  return (
    <div className={styles.RepositoriesListContainer}>
      {repoStorage.map((repo, index) => (
        <div key={index}>
          <img src="icons/GitHub-Light.png" alt="Icone do GitHub Branco" />
          <div>
            <span>Nome</span>
            <h2>{repo.name}</h2>
          </div>
          <div>
            <span>Descrição</span>
            <h2>{repo.description}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
