import Image from 'next/image';
import Router from 'next/router';
import { Button } from '../components/lib/Button/Button';

const Error404 = () => {
  const redirectToHome = () => {
    Router.push('/');
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column-reverse',
        height: '100vh',
        padding: '0px 30px'
      }}
    >
      <Image
        src={'/404.svg'}
        alt="Picture of the author"
        width={700}
        height={700}
      />
      <div>
        <h3>PAGE NOT FOUND</h3> It looks like that page does not exist — please
        check the URL and try again.
      </div>
      <Button
        variant="ghost"
        onClick={redirectToHome}
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
        Go Home
      </Button>
    </div>
  );
};

export default Error404;
