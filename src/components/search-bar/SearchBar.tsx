import React from 'react'
import { Dispatch, SetStateAction } from "react";
import styles from "@/styles/search-bar/SearchBar.module.scss";
import { IoMdSearch } from "react-icons/io";

interface Props {
  setState: Dispatch<SetStateAction<string>>
}

function SearchBarComponent ({ setState } : Props) {
  return (
    <>
      <div className={styles.container}>
        <label htmlFor="searchbar">
          <IoMdSearch fontSize={25}/>
        </label>
        <input
          onChange={(e) => setState(e.target.value)}
          id="searchbar"
          type="text"
          placeholder="Search for a country..."
        ></input>
      </div>
    </>
  );
}

export default SearchBarComponent;
