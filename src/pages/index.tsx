import { useContext } from "react";
import Head from "next/head";
import { RepoConsultingContext } from "../contexts/RepoConsultingContext";
import { LoginWithGithub } from "../components/LoginWithGitHub";
import { SearchBar } from "../components/SearchBar";
import { RepositoriesList } from "../components/RepositoriesList";
import { StarredList } from "../components/StarredList";

import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  const { isLogged, repoIsOpen, starredIsOpen } = useContext(
    RepoConsultingContext
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Compasso.Uol</title>
      </Head>
      <div>
        {repoIsOpen && <RepositoriesList />}
        {starredIsOpen && <StarredList />}
        {!repoIsOpen &&
          !starredIsOpen &&
          (isLogged ? <SearchBar /> : <LoginWithGithub />)}
      </div>
    </div>
  );
}
