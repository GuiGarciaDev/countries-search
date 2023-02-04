import Image from "next/image";
import styles from "@/styles/CountryPage.module.scss";
import Header from "@/src/components/header/Header";
import BorderCountries from "@/src/components/border-countries/BorderCountries";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";
import useFetch from "@/src/hooks/useFetch";
import React from "react";
import Link from "next/link";
import dots from "@/src/utils/dots";

export default function CountryPage() {
  const { query } = useRouter();

  interface ICountry {
    name: string;
    nativeName: string;
    alpha2Code: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    borders: string[];
    topLevelDomain: string[];
    flags: {
      svg: string;
      png: string;
    };
    currencies: [
      {
        code: string;
      }
    ];
    languages: [
      {
        name: string;
      }
    ];
    flag: string;
  }

  const { data, isFetching } = useFetch<Array<ICountry>>(
    "http://localhost:3000/api/countries"
  );

  const country = data
    ?.filter((e) => e.alpha2Code.toLocaleLowerCase() === query.name)
    .at(0);

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.button_div}>
            <Link href={"/"}>
              <button className={styles.back_button}>
                <BiArrowBack fontSize={25} />
                Back
              </button>
            </Link>
          </div>
          <div className={styles.flex_row}>
            <Image
              src={country?.flag as string}
              alt={"Country"}
              width={550}
              height={380}
            ></Image>
            <div className={styles.flex_collumn}>
              <h2 className={styles.h2}>{country?.name}</h2>
              <div className={styles.flex_row}>
                <span>
                  <p className={styles.p}>
                    Native Name:{" "}
                    <span className={styles.info_span}>
                      {country?.nativeName}
                    </span>
                  </p>
                  <p className={styles.p}>
                    Population:{" "}
                    <span className={styles.info_span}>
                      {country?.population.toLocaleString()}
                    </span>
                  </p>
                  <p className={styles.p}>
                    Region:{" "}
                    <span className={styles.info_span}>{country?.region}</span>
                  </p>
                  <p className={styles.p}>
                    Sub Region:{" "}
                    <span className={styles.info_span}>
                      {country?.subregion}
                    </span>
                  </p>
                  <p className={styles.p}>
                    Capital:{" "}
                    <span className={styles.info_span}>{country?.capital}</span>
                  </p>
                </span>
                <span>
                  <p className={styles.p}>
                    Top Level Domain:{" "}
                    <span className={styles.info_span}>
                      {country?.topLevelDomain}
                    </span>
                  </p>
                  <p className={styles.p}>
                    Currencies:{" "}
                    <span className={styles.info_span}>
                      {country?.currencies === undefined? null : country?.currencies.map((e) => e.code)}
                    </span>
                  </p>
                  <p className={styles.p}>
                    Languages:{" "}
                    <span className={styles.info_span}>
                      {country?.languages.map((e) => e.name)}
                    </span>
                  </p>
                </span>
              </div>
              <div className={styles.border_countries}>
                <h3 className={styles.h3}>Border Countries:</h3>
                <div className={styles.border_countries_container}>
                  {country?.borders === undefined ? <></> : country?.borders.map((e) => {
                    return <BorderCountries name={e} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
