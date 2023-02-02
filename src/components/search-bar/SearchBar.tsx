import styles from "@/styles/search-bar/SearchBar.module.scss";
import { IoMdSearch } from "react-icons/io";

function SearchBarComponent() {
  return (
    <>
      <div className={styles.container}>
        <label htmlFor="searchbar">
          <IoMdSearch fontSize={25}/>
        </label>
        <input
          id="searchbar"
          type="text"
          placeholder="Search for a country..."
        ></input>
      </div>
    </>
  );
}

export default SearchBarComponent;
