import Link from 'next/link'
import styles from './styles.module.css'

export default function Back() {
    return(
        <Link href="/">
          <a className={styles.back}> Zurück Zum Menü</a>
        </Link>
    )
}