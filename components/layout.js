import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Gusto Ried Menü</title>
        <meta name="description" content="Gusto Ried Menü" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Gusto Ried Menü
        </h1>
        {children}
      </main>
      <footer className={styles.footer}>
          <div className={styles.footeralt}>
            Design by <Link href="https://akgngr.com"><a>akgngr</a></Link>
          </div>
      </footer>
      </div>
    </>
  )
}