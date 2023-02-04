import styles from "@/styles/border-countries/BorderCountries.module.scss";

function BorderCountries({ name }: any) {
  return (
      <span className={styles.border_countries}>
        <p>{name}</p>
      </span>
  );
}

export default BorderCountries;
