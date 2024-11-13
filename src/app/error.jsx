"use client";
import { useRouter } from 'next/router';

const Error = () => {
  const router = useRouter();

  const redirectToHome = () => {
    router.push('/');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Oops! Something went wrong!</h1>
      <p style={styles.message}>We {"couldn't"} process your request. Please try again later.</p>
      <button style={styles.button} onClick={redirectToHome}>Go to Home</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  message: {
    fontSize: '18px',
    marginBottom: '30px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: 'var(--btn)',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Error;
