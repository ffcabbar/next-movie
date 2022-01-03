import type { NextPage } from 'next';
import Head from 'next/head';
import { Button } from '../components/lib/Button/Button';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Up</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sequi
        mollitia ea quos ipsum eius quisquam saepe nisi adipisci a. Cumque
        nesciunt dolorem est beatae ex veritatis repellat perferendis
        repellendus?
      </p>
      <Button
        leftIcon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 31 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M27.991 1.84616C24.6731 -0.968294 19.7386 -0.462053 16.6932 2.66579L15.5004 3.88921L14.3077 2.66579C11.2683 -0.462053 6.32777 -0.968294 3.00986 1.84616C-0.792406 5.07646 -0.992207 10.8741 2.41046 14.3756L14.1261 26.4169C14.8829 27.1944 16.112 27.1944 16.8688 26.4169L28.5844 14.3756C31.9931 10.8741 31.7933 5.07646 27.991 1.84616V1.84616Z" />
          </svg>
        }
        rightIcon={
          <svg
            height="24px"
            viewBox="0 0 96 96"
            width="24px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12,52h62.344L52.888,73.456c-1.562,1.562-1.562,4.095-0.001,5.656c1.562,1.562,4.096,1.562,5.658,0l28.283-28.284l0,0  c0.186-0.186,0.352-0.391,0.498-0.609c0.067-0.101,0.114-0.21,0.172-0.315c0.066-0.124,0.142-0.242,0.195-0.373  c0.057-0.135,0.089-0.275,0.129-0.415c0.033-0.111,0.076-0.217,0.099-0.331C87.973,48.525,88,48.263,88,48l0,0  c0-0.003-0.001-0.006-0.001-0.009c-0.001-0.259-0.027-0.519-0.078-0.774c-0.024-0.12-0.069-0.231-0.104-0.349  c-0.039-0.133-0.069-0.268-0.123-0.397c-0.058-0.139-0.136-0.265-0.208-0.396c-0.054-0.098-0.097-0.198-0.159-0.292  c-0.146-0.221-0.314-0.427-0.501-0.614L58.544,16.888c-1.562-1.562-4.095-1.562-5.657-0.001c-1.562,1.562-1.562,4.095,0,5.658  L74.343,44L12,44c-2.209,0-4,1.791-4,4C8,50.209,9.791,52,12,52z" />
          </svg>
        }
      >
        Button
      </Button>
    </div>
  );
};

export default Home;
