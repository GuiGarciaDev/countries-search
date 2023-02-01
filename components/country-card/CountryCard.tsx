import styles from '@/components/country-card/CountryCard.module.scss';
import { useState } from 'react';

export default function CountryCard() {
    //const [brazil, setBrazil] = useState({name: ''});

    //fetch('http://localhost:3000/api/countries').then((res) => res.json()).then(data => setBrazil(data[31]))

    return (
        <div className={styles.countryCard}>
            {/* <img src='' alt='country-flag'/> */}
            <div className={styles.flagTest}></div>
            <div className={styles.countryInfo}>
                <h1>Brazil</h1>
                <span><b>Population:</b> 206.135.893</span>
                <span><b>Region:</b> Americas</span>
                <span><b>Capital:</b> Brasília</span>
            </div>
        </div>
    )
}