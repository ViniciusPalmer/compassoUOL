import { useContext } from "react";
import { RepoConsultingContext } from "../contexts/RepoConsultingContext";

import styles from "../styles/components/RepoCards.module.scss";

export function RepoCards() {
  const { repoStorage, repoIsOpen } = useContext(RepoConsultingContext);
  return (
    <>
      {repoStorage !== null && repoStorage !== undefined && repoIsOpen && (
        <div className={styles.RepoCardsContainer}>
          {repoStorage.map((repo, index) => (
            <div key={index} className={styles.RepositoriesListCard}>
              <div className={styles.RepositoriesImg}>
                <img
                  src="icons/GitHub-Light.png"
                  alt="Icone do GitHub Branco"
                />
                <h2>Repositorio do GitHub</h2>
              </div>

              <div className={styles.RepositoriesListName}>
                <span>Nome:</span>
                <h2>{repo.name}</h2>
              </div>

              <div className={styles.RepositoriesListDescription}>
                <span>Descrição:</span>
                <h2>
                  {!repo.description
                    ? "Descrição não encontrada"
                    : repo.description}
                </h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
