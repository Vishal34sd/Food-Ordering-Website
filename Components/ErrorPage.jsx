import React from 'react';

function ErrorPage() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f8d7da',
    color: '#721c24',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '60px',
    marginBottom: '10px',
  };

  const messageStyle = {
    fontSize: '20px',
    marginBottom: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#721c24',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>404</h1>
      <p style={messageStyle}>Oops! Page not found.</p>
      <button
        style={buttonStyle}
        onClick={() => (window.location.href = '/')}
      >
        Go Home
      </button>
    </div>
  );
}

export default ErrorPage;
