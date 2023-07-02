import Image from "next/image";
import styles from "@/web/styles/Search.module.css";

const SearchBar = () => {
  return (
    <>
      <Image
        src="/search.svg"
        alt="Search icon"
        width={25}
        height={58}
        className={styles.icon}
      />
      <input type="text" className={styles.searchBar} />
    </>
  );
};

export default SearchBar;
