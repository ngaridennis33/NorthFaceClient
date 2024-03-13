import React from 'react'
import styles from "./page.module.scss";

const About = () => {
  return (
        <div>
            <main className={styles.main}>
                <h1 className={styles.title}>About Us</h1>

                <section className={styles.story}>
                    <h2>Our Story</h2>
                    <p>
                        In the digital marketplace, our e-commerce journey began with a simple mission: to provide quality, convenience, and personalized service. Founded by passionate innovators, we saw an opportunity to create a space where every product feels personal to you.
                    </p>
                </section>

                <section className={styles.values}>
                    <h2>Our Values</h2>
                    <p>
                        Integrity, customer-centricity, and innovation are the heart of our business. We believe in creating a delightful and trustworthy online shopping experience, upholding high standards of quality, and ensuring exceptional service.
                    </p>
                </section>

                <section className={styles.commitment}>
                    <h2>Our Commitment</h2>
                    <p>
                        We're more than just a marketplace; we're a community. We are dedicated to making a positive impact on the planet and supporting the artisans and creators who bring their products to you.
                    </p>
                </section>

                <section className={styles.connect}>
                    <h2>Connect With Us</h2>
                    <p>
                        Join our community on social media, share your experiences, and be a part of the conversation. Your stories inspire us to keep improving.
                    </p>
                </section>

                <section className={styles.contact}>
                    <h2>Get In Touch</h2>
                    <p>
                        For any inquiries, reach out to our customer service team by email or phone. Visit our FAQ page for quick answers to common questions.
                    </p>
                </section>

                <section className={styles.join}>
                    <h2>Join Our Journey</h2>
                    <p>
                        As we look to the future, we're excited to continue this journey with you, bringing you an even more personalized shopping experience.
                    </p>
                </section>
            </main>
        </div>
  )
}

export default About