import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Error404(): JSX.Element {
  return (
    <div
      style={{
        minHeight: '480px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '32px',
      }}
    >
      <Helmet><title>6 cities: error</title></Helmet>
      <h1
        style={{
          fontSize: '48px',
          color: '#ff0000',
          margin: 0,
          lineHeight: 1.1
        }}
      >
        404.
        <br />
        <small
          style={{
            fontSize: '24px',
            color: '#666666'
          }}
        >
          Page not found
        </small>
      </h1>
      <Link
        to="/"
        style={{
          marginTop: '20px',
          display: 'inline-block',
          padding: '8px 16px',
          background: '#2563eb',
          color: '#ffffff',
          borderRadius: '6px',
          textDecoration: 'none',
        }}
      >
        Go to main page
      </Link>
    </div>
  );
}
