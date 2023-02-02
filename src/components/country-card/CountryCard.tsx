import styles from '@/styles/country-card/CountryCard.module.scss';

export interface Icountry {
    country: {
        name: string,
        flag: string,
        population: number,
        region: string,
        capital: string
    }
}

export default function CountryCard({ country } : Icountry) {
    return (
        <div className={styles.countryCard}>
            <img src={country.flag} alt='country-flag'/>
            <div className={styles.flagTest}></div>
            <div className={styles.countryInfo}>
                <h1>{country?.name}</h1>
                <span><b>Population:</b> {country.population}</span>
                <span><b>Region:</b> {country.region}</span>
                <span><b>Capital:</b> {country.capital}</span>
            </div>
        </div>
    )
}