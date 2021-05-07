import styles from "../styles/components/StarredCards.module.scss";
import { useContext } from "react";
import { RepoConsultingContext } from "../contexts/RepoConsultingContext";

export function StarredCards() {
  const { starredStorage, starredIsOpen } = useContext(RepoConsultingContext);
  return (
    <>
      {starredStorage !== null &&
        starredStorage !== undefined &&
        starredIsOpen && (
          <div className={styles.StarredCardsContainer}>
            {starredStorage.map((repo, index) => (
              <div key={index} className={styles.StarredCardsListCard}>
                <div className={styles.StarredCardsImg}>
                  <img
                    src={repo.owner.avatar_url}
                    alt="Icone do GitHub Branco"
                  />
                  <div>
                    <span>Proprietario:</span>
                    <h2>{repo.owner.login}</h2>
                  </div>
                </div>

                <div className={styles.StarredCardstName}>
                  <span>Nome:</span>
                  <h2>{repo.name}</h2>
                </div>

                <div className={styles.StarredCardsDescription}>
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
