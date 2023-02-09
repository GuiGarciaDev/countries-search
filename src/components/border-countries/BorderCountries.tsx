import styles from "@/styles/border-countries/BorderCountries.module.scss";
import BorderCoutriesAnimation from "../country-page-motion-divs/BorderCountriesAnimation";

function BorderCountries({ name }: any) {
  return (
    <BorderCoutriesAnimation>
      <span className={styles.border_countries}>
        <p>{name}</p>
      </span>
    </BorderCoutriesAnimation>
  );
}

export default BorderCountries;
