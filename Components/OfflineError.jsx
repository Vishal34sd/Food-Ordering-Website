import React from 'react';

const OfflineError = () => {
  const containerStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    color: '#333',
    textAlign: 'center',
    padding: '20px',
  };

  const cardStyle = {
    padding: '40px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    maxWidth: '500px',
    width: '100%',
  };

  const emojiStyle = {
    fontSize: '48px',
    marginBottom: '20px',
  };

  const headingStyle = {
    fontSize: '28px',
    marginBottom: '10px',
    color: '#d9534f', // Bootstrap red
  };

  const textStyle = {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#555',
  };

  const retryButtonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#0275d8', // Bootstrap blue
    color: '#fff',
    cursor: 'pointer',
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={emojiStyle}>🔴</div>
        <div style={headingStyle}>You're Offline</div>
        <div style={textStyle}>
          It seems like you're not connected to the internet. Please check your connection and try again.
        </div>
        <button onClick={handleReload} style={retryButtonStyle}>Retry</button>
      </div>
    </div>
  );
};

export default OfflineError;
