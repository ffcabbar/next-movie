import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Breadcrumb.module.scss';

type Props = {};

// eslint-disable-next-line no-unused-vars
const Breadcrumb = (props: Props) => {
  const router = useRouter();
  return (
    <div className={styles.breadcrumb}>
      <nav>
        <ol>
          <li className={router.pathname === '/' ? styles.active : ''}>
            <Link href="/">Home</Link>
            <span role="presentation" className={styles.separator}>
              /
            </span>
          </li>
          <li className={router.pathname === '/favorite' ? styles.active : ''}>
            <Link href="/favorite">Favorite</Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
