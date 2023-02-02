import styles from "./styles/SearchBar.module.scss";
import { IoMdSearch } from "react-icons/io";

function SearchBarComponent() {
  return (
    <>
      <IoMdSearch width={50} color={"black"}></IoMdSearch>
      <div>
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
