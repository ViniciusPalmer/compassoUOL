import axios from "axios";
import { useContext } from "react";
import { RepoConsultingContext } from "../contexts/RepoConsultingContext";

import styles from "../styles/components/SearchResult.module.scss";

interface ISearchRepo {
  name: string;
  description: string;
}

interface ISearchStarred {
  name: string;
  description: string;
  owner: IOwnerStarred;
}

interface IOwnerStarred {
  login: string;
  avatar_url: string;
}

export function SearchResult() {
  const {
    lastSearch,
    repoStorage,
    activeStarred,
    activeRepo,
    insertNewRepoStorage,
    insertNewStarredStorage,
    repoIsOpen,
  } = useContext(RepoConsultingContext);

  async function repoSearch() {
    activeRepo();

    const res = await axios.get(
      `https://api.github.com/users/${lastSearch.login}/repos`
    );

    var templateRes: ISearchRepo[] = [];

    for (let index = 0; index < res.data.length; index++) {
      const result: ISearchRepo = {
        name: res.data[index].name,
        description: res.data[index].description,
      };

      templateRes.push(result);
    }

    await insertNewRepoStorage(templateRes);
  }

  async function starredSearch() {
    activeStarred();

    const res = await axios.get(
      `https://api.github.com/users/${lastSearch.login}/starred`
    );

    var templateStarred: ISearchStarred[] = [];

    for (let index = 0; index < res.data.length; index++) {
      const result: ISearchStarred = {
        name: res.data[index].name,
        description: res.data[index].description,
        owner: {
          login: res.data[index].owner.login,
          avatar_url: res.data[index].owner.avatar_url,
        },
      };

      templateStarred.push(result);
    }

    await insertNewStarredStorage(templateStarred);
  }

  return (
    <div className={styles.SearchResultContainer}>
      <img src={lastSearch.avatar_url} alt="Avatar GitHub" />
      <div>
        <div>
          <span>Nome:</span>
          <h1>{lastSearch.name}</h1>
        </div>
        <div>
          <span>Tipo de usuário:</span>
          <h2>{lastSearch.type}</h2>
        </div>
        {lastSearch.mail !== null && lastSearch.mail !== undefined && (
          <div>
            <span>E-mail:</span>
            <h2>{lastSearch.mail}</h2>
          </div>
        )}

        {lastSearch.company !== null && lastSearch.company !== undefined && (
          <div>
            <span>Empresa:</span>
            <h2>
              {lastSearch.company === undefined
                ? "Não informado"
                : lastSearch.company}
            </h2>
          </div>
        )}

        <div>
          <span>Seguidores:</span>
          <h2>{lastSearch.followers}</h2>
        </div>

        <div>
          <button onClick={repoSearch}>Repositores</button>
        </div>
        <div>
          <button onClick={starredSearch}>Starred</button>
        </div>
      </div>
    </div>
  );
}
