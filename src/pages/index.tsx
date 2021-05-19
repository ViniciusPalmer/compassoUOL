import { useContext } from "react";
import Head from "next/head";
import { RepoConsultingContext } from "../contexts/RepoConsultingContext";
import { LoginWithGithub } from "../components/LoginWithGitHub";
import { SearchBar } from "../components/SearchBar";
import { StarredList } from "../components/StarredList";

import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  const { isLogged, repoIsOpen, starredIsOpen } = useContext(
    RepoConsultingContext
  );

  return (
    <div className={styles.container}>
      <div>{isLogged ? <SearchBar /> : <LoginWithGithub />}</div>
    </div>
  );
}
