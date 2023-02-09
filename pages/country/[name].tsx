import Image from "next/image";
import styles from "@/styles/CountryPage.module.scss";
import Header from "@/src/components/header/Header";
import BorderCountries from "@/src/components/border-countries/BorderCountries";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";
import useFetch from "@/src/hooks/useFetch";
import React from "react";
import Link from "next/link";
import CountryTitleAnimation from "@/src/components/country-page-motion-divs/CountryTitleAnimation";
import CountryInfoAnimation from "@/src/components/country-page-motion-divs/CountryInfoAnimation";

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
    "https://countries-search-eta.vercel.app/api/countries"
  );

  const country = data
    ?.filter((e) => e.alpha2Code.toLocaleLowerCase() === query.name)
    .at(0);

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.main}>
        <Link href={"/"}>
          <BiArrowBack fontSize={25} />
          Back
        </Link>
        <div className={styles.flex_row}>
          <Image src={country?.flag as string} alt={country?.name as string} width={380} height={300} />

          <div className={styles.countrySettings}>
            <CountryTitleAnimation>
              <h2 className={styles.h2}>{country?.name}</h2>
            </CountryTitleAnimation>

            <div className={styles.countryDescription}>
              <span>
                <CountryInfoAnimation delay={0.2}>
                  <p className={styles.p}>
                    Native Name:{" "}
                    <span className={styles.info_span}>
                      {country?.nativeName}
                    </span>
                  </p>
                </CountryInfoAnimation>

                <CountryInfoAnimation delay={0.23}>
                  <p className={styles.p}>
                    Population:{" "}
                    <span className={styles.info_span}>
                      {country?.population.toLocaleString()}
                    </span>
                  </p>
                </CountryInfoAnimation>

                <CountryInfoAnimation delay={0.26}>
                  <p className={styles.p}>
                    Region:{" "}
                    <span className={styles.info_span}>{country?.region}</span>
                  </p>
                </CountryInfoAnimation>

                <CountryInfoAnimation delay={0.29}>
                  <p className={styles.p}>
                    Sub Region:{" "}
                    <span className={styles.info_span}>
                      {country?.subregion}
                    </span>
                  </p>
                </CountryInfoAnimation>

                <CountryInfoAnimation delay={0.32}>
                  <p className={styles.p}>
                    Capital:{" "}
                    <span className={styles.info_span}>
                      {country?.capital ? country?.capital : "None"}
                    </span>
                  </p>
                </CountryInfoAnimation>
              </span>
              <span>
                <CountryInfoAnimation delay={0.35}>
                  <p className={styles.p}>
                    Top Level Domain:{" "}
                    <span className={styles.info_span}>
                      {country?.topLevelDomain}
                    </span>
                  </p>
                </CountryInfoAnimation>
                <CountryInfoAnimation delay={0.38}>
                  <p className={styles.p}>
                    Currencies:{" "}
                    <span className={styles.info_span}>
                      {country?.currencies === undefined
                        ? "None"
                        : country?.currencies.map((e) => e.code)}
                    </span>
                  </p>
                </CountryInfoAnimation>
                <CountryInfoAnimation delay={0.41}>
                  <p className={styles.p}>
                    Languages:{" "}
                    <span className={styles.info_span}>
                      {country?.languages.map((e, idx) =>
                        idx === country?.languages.length - 1
                          ? e.name
                          : e.name + ", "
                      )}
                    </span>
                  </p>
                </CountryInfoAnimation>
              </span>
            </div>
            <div className={styles.border_countries}>
              <h3>Border Countries:</h3>
              <div className={styles.border_countries_container}>
                {country?.borders === undefined ? (
                  <BorderCountries name={"Undefined"} />
                ) : (
                  country?.borders.map((e) => {
                    return <BorderCountries name={e} key={e} />;
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
