import React from 'react';

const Contact = () => {
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
      maxWidth: '1000px',
      backgroundColor: '#fffaf5',
      border: '1px solid #ffa94d',
      borderRadius: '15px',
      padding: '30px',
      boxShadow: '0 4px 20px rgba(255, 165, 0, 0.1)',
    },
    title: {
      fontSize: '30px',
      fontWeight: 'bold',
      color: '#f97316',
      textAlign: 'center',
      marginBottom: '30px',
    },
    content: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '30px',
    },
    form: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    input: {
      padding: '12px 15px',
      fontSize: '16px',
      border: '1px solid #ffcc99',
      borderRadius: '8px',
      outline: 'none',
    },
    textarea: {
      padding: '12px 15px',
      fontSize: '16px',
      border: '1px solid #ffcc99',
      borderRadius: '8px',
      resize: 'vertical',
      outline: 'none',
    },
    button: {
      backgroundColor: '#f97316',
      color: '#ffffff',
      padding: '12px',
      fontSize: '16px',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
    },
    contactInfo: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      fontSize: '16px',
      color: '#333',
    },
    infoItem: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      fontWeight: 'bold',
      color: '#f97316',
    },
    map: {
      width: '100%',
      height: '200px',
      border: '1px solid #ffcc99',
      borderRadius: '8px',
      marginTop: '15px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h2 style={styles.title}>Contact Foodie Hut</h2>
        <div style={styles.content}>
          {/* Contact Form */}
          <form style={styles.form}>
            <input type="text" placeholder="Your Name" style={styles.input} />
            <input type="email" placeholder="Your Email" style={styles.input} />
            <textarea rows="5" placeholder="Your Message" style={styles.textarea}></textarea>
            <button type="submit" style={styles.button}>Send Message</button>
          </form>

          {/* Contact Info */}
          <div style={styles.contactInfo}>
            <div style={styles.infoItem}>
              <span style={styles.label}>Phone:</span>
              <span>+91 98765 43210</span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.label}>Email:</span>
              <span>support@foodiehut.com</span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.label}>Address:</span>
              <span>
                Foodie Hut HQ,<br />
                2nd Floor, Spice Street,<br />
                New Delhi - 110001, India
              </span>
            </div>

            {/* Map Embed */}
            <iframe
              title="Foodie Hut Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83908395026!2d77.06889913633253!3d28.5272803432586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e5c7d2301d%3A0x8bb0f014a9f11a24!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1686481533622!5m2!1sen!2sin"
              style={styles.map}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
