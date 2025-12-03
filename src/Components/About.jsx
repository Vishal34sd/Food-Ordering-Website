import React from 'react';

const About = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
     backgroundColor: "rgb(248, 165, 62)",
      minHeight: '100vh',
      padding: '40px 20px',
      display: 'flex',
      justifyContent: 'center',
    },
    wrapper: {
      width: '100%',
      maxWidth: '900px',
      backgroundColor: '#fffaf5',
      border: '1px solid #ffa94d',
      borderRadius: '15px',
      padding: '30px',
      boxShadow: '0 4px 20px rgba(255, 165, 0, 0.1)',
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#f97316',
      textAlign: 'center',
      marginBottom: '20px',
    },
    subtitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#f97316',
      margin: '20px 0 10px',
    },
    text: {
      fontSize: '16px',
      color: '#333',
      lineHeight: '1.6',
    },
    missionBox: {
      marginTop: '30px',
      padding: '20px',
      backgroundColor: '#fff3e0',
      borderRadius: '10px',
      border: '1px solid #ffd6a0',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h1 style={styles.title}>About Foodie Hut</h1>
        <p style={styles.text}>
          Welcome to <strong>Foodie Hut</strong> — your go-to destination for ordering fresh, delicious, and affordable meals delivered straight to your door.
          Whether you're craving street food, fine dining, or something quick and tasty, Foodie Hut connects you to the best local restaurants with just a few clicks.
        </p>

        <h3 style={styles.subtitle}>Who We Are</h3>
        <p style={styles.text}>
          We are a passionate team of foodies, technologists, and customer-first thinkers based in India, committed to making your food ordering experience smooth and satisfying.
        </p>

        <h3 style={styles.subtitle}>What We Offer</h3>
        <p style={styles.text}>
          - A wide selection of cuisines<br />
          - Live order tracking<br />
          - Easy payment and cashback offers<br />
          - 24/7 support for food lovers
        </p>

        <div style={styles.missionBox}>
          <h3 style={styles.subtitle}>Our Mission</h3>
          <p style={styles.text}>
            To bring joy through food by connecting people with their favorite dishes — fresh, fast, and fuss-free. We believe in quality, trust, and convenience in every bite.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
