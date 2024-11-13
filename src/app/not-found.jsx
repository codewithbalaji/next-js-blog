import Link from "next/link";

const NotFound = () => {

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Page Not Found</h1>
      <p style={styles.message}>Sorry, the page you are looking for is not available.</p>
      <Link href="/" passHref>
        <button style={styles.button}>Return Home</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',
    textAlign: 'center',
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
    padding: '12px 24px',
    fontSize: '18px',
    backgroundColor: 'var(--btn)',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  },
};

export default NotFound;
