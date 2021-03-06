import { useState, useContext } from "react";
import axios from "axios";

import { RepoConsultingContext } from "../contexts/RepoConsultingContext";
import { BsSearch } from "react-icons/bs";
import styles from "../styles/components/SearchBar.module.scss";
import { LoadingScreen } from "./LoadingScreen";
import { SearchResult } from "./SearchResult";
import { RepoCards } from "./RepoCards";
import { StarredCards } from "./StarredCards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ILastSearchUser {
  login: string;
  name: string;
  avatar_url: string;
  type: string;
  mail: string;
  followers: number;
  company: string;
}

export function SearchBar() {
  const [isLoading, setIsLoading] = useState(false);
  const [dirName, setDirName] = useState("");
  const {
    lastSearch,
    insertNewSearch,
    repoIsOpen,
    starredIsOpen,
    activeStarred,
    activeRepo,
  } = useContext(RepoConsultingContext);

  function execTask(res) {
    const templateRes: ILastSearchUser = {
      login: res.data.login,
      name: res.data.name,
      avatar_url: res.data.avatar_url,
      type: res.data.type,
      mail: res.data.email,
      followers: res.data.followers,
      company: res.data.company,
    };
    insertNewSearch(templateRes);
  }

  async function serchOnGit() {
    repoIsOpen && activeRepo();
    starredIsOpen && activeStarred;

    if (dirName !== "") {
      setIsLoading(true);

      const res = await axios
        .get(`https://api.github.com/users/${dirName}`)
        .then((res) => execTask(res))
        .catch(() => toast.error("Ops cadastro não encontrado"));
      setIsLoading(false);
    }
  }
  return (
    <>
      <ToastContainer />
      <div className={styles.SearchBarContainer}>
        {isLoading && <LoadingScreen />}
        <div>
          <input
            type="text"
            placeholder="Pesquise um perfil do GitHub"
            onChange={(e) => setDirName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && serchOnGit()}
          />
          <BsSearch size={15} color={"white"} onClick={serchOnGit} />
        </div>
        {lastSearch && <SearchResult />}
        <RepoCards />
        <StarredCards />
      </div>
    </>
  );
}
