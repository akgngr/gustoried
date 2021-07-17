
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
  const menu = [
    {
      'id': 1,
      'link': '/unsre-menus',
      'name': 'UNSERE MENÜS'
    },
    {
      'id': 2,
      'link': '/unsere-pizzen',
      'name': 'UNSERE PIZZEN'
    },
    {
      'id': 3,
      'link': '/unsere-kebapspezialitaten',
      'name': 'UNSERE KEBAPSPEZIALITÄTEN'
    },
    {
      'id': 4,
      'link': '/unsere-nudelgerichte',
      'name': 'UNSERE NUDELGERICHTE'
    },
    {
      'id': 5,
      'link': '/pide-spezialitaten',
      'name': 'PIDE SPEZIALITÄTEN'
    },
    {
      'id': 6,
      'link': '/gusto-spezialitaten',
      'name': 'GUSTO SPEZIALITÄTEN'
    },
    {
      'id': 7,
      'link': '/beilagen',
      'name': 'BEILAGEN'
    },
    {
      'id': 8,
      'link': '/getranke',
      'name': 'GETRÄNKE'
    },
    {
      'id': 9,
      'link': '/legende',
      'name': 'LEGENDE'
    },
    {
      'id': 10,
      'link': '/nachtisch',
      'name': 'NACHTISCH'
    },
    {
      'id': 11,
      'link': '/salate',
      'name': 'SALATE'
    },
  ]
  return (
      <Layout>
        <div className={styles.grid}>
            <ul className={styles.menu}>
              {menu.map(m =>(
                <li key={m.id}>
                  <Link href={m.link}>
                    <a>{m.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
        </div>
      </Layout>
  )
}
