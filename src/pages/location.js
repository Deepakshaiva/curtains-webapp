import React from "react";
import styles from "@/styles/Location.module.css";

export default function Location() {
  return (
    <div className={styles.page}>
      <div className={styles.overlay}></div>
      <main className={styles.main}>
        <h1 className={styles.title}>Our Location</h1>
        <p className={styles.subtitle}>
          Visit us at our showroom or office. We’re always happy to welcome our customers in person!
        </p>

        <div className={styles.mapCard}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Our Location"
          ></iframe>
        </div>

        <div className={styles.addressCard}>
          <h2>Our Address</h2>
          <p>123 HomeStyle Street, Mysore, India</p>
          <p>Phone: +91 80888 95956</p>
          <p>Email: <a href="mailto:support@homies.com">support@homies.com</a></p>
        </div>
      </main>
    </div>
  );
}
