import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import CountryCard from "@/src/components/country-card/CountryCard";
import useFetch from "@/src/hooks/useFetch";
import SearchBarComponent from "@/src/components/search-bar/SearchBar";
import Header from '@/src/components/header/Header';
import { useEffect, useState, useRef } from "react";
import { upperMultiplesFirstChar } from "@/src/utils/upperCase";

export default function Home() {
  const [filter, setFilter] = useState<string | undefined>("All")
  const [searchBar, setSearchBar] = useState<string>('')
  const [dataFiltered, setDataFiltered] = useState<Array<ICountry> | undefined>([])
  const select = useRef<HTMLSelectElement>(null)
  const searchBarValue = useRef<HTMLInputElement>(null)

  interface ICountry {
    name: string,
    alpha2Code: string,
    flag: string,
    population: string,
    region: string,
    capital: string
  }

  const { data, isFetching } = useFetch<Array<ICountry>>('http://localhost:3000/api/countries')

  useEffect(() => {
    setDataFiltered(data) // First Init: Prevent 'undefined' value
  }, [data])

  useEffect(() => {
    if (filter !== undefined && filter !== "All")  {
      setDataFiltered(data?.filter(x => { return x.region === filter}))  
    } else {setDataFiltered(data)}
  }, [filter])

  useEffect(() => {
    if (filter !== 'All') { // If region !== all, search only between contries in this region
      setDataFiltered(
        data?.filter(x => { 
          return x.name.includes(upperMultiplesFirstChar(searchBar)) && x.region == filter
        })
      )  
    } else { // else search in all the world
      setDataFiltered(data?.filter(x => { return x.name.includes(upperMultiplesFirstChar(searchBar))}))  
    } 
  }, [searchBar])

  return (
    <>
      <Head>
        <title>Countries</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />

        <div className={styles.bodyPage}>
          <div className={styles.searchFilter}>
            <SearchBarComponent setState={setSearchBar}/>
            <form id='regions'>
              <select name="regions" id="regions" ref={select} onChange={() => setFilter(select.current?.value)}>
                <option selected disabled hidden>Filter by region</option>
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
            </form>
          </div>

          <div className={styles.countries}>
            { isFetching 
                ? <div className={styles.ldsRing}><div></div><div></div><div></div><div></div></div>
                : dataFiltered?.map((country) => {
                  return (
                    <CountryCard country={country} key={Math.random()}/>
                  )
                })
            }
          </div>
        </div>
      </main>
    </>
  );
}
