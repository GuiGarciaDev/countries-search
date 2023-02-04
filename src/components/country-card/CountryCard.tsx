import dotsFormater from '@/src/utils/dots';
import styles from '@/styles/country-card/CountryCard.module.scss';

export interface Icountry {
    country: {
        name: string,
        flag: string,
        population: string,
        region: string,
        capital: string,
    }
}

export default function CountryCard({ country } : Icountry) {
    return (
        <div className={styles.countryCard}>
            <div className={styles.imgHolder}>
                <img src={country.flag} alt='country-flag'/>
            </div>
            <div className={styles.countryInfo}>
                <h1>{country?.name}</h1>
                <span><b>Population:</b> {dotsFormater(country.population)}</span>
                <span><b>Region:</b> {country.region}</span>
                <span><b>Capital:</b> {country.capital ? country.capital : 'Undefined'}</span>
            </div>
        </div>   
    )
}