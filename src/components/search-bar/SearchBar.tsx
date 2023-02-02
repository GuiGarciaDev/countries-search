import styles from "@/styles/search-bar/SearchBar.module.scss";
import { IoMdSearch } from "react-icons/io";

function SearchBarComponent() {
  return (
    <>
      <div className={styles.container}>
        <IoMdSearch
          className={styles.search_icon}
          fontSize={25}
        ></IoMdSearch>
        <input
          className={styles.search_bar_component}
          type="text"
          placeholder="Search for a country..."
        ></input>
      </div>
    </>
  );
}

export default SearchBarComponent;
