import Image from 'next/image';
import styles from './PlaceholderImage.module.scss';

type Props = {};

// eslint-disable-next-line no-unused-vars
const PlaceholderImage = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerSection}>
        <div className={styles.title}>
          <h1>
            Welcome to <strong>MovieUP.</strong>
          </h1>
        </div>
        <div className={styles.description}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
        </div>
        <div className={styles.imagePoints}>
          <Image
            src={'/image-points.svg'}
            alt="Movie Up Logo"
            width={160}
            height={160}
          />
        </div>
      </div>
    </div>
  );
};

export default PlaceholderImage;
