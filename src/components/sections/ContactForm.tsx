import React, { useState } from 'react';
import styles from './styles/ContactForm.module.css';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init("YOUR_PUBLIC_KEY");

      const templateParams = {
        to_email: 'gretskymikolaj@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams
      );

      toast.success('Message sent successfully!', {
        duration: 3000,
        position: 'bottom-right',
        style: {
          background: '#10B981',
          color: '#fff',
          borderRadius: '8px',
        },
      });
      await setTimeout(() => {
      }, 100);
      // Clear the form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className={styles.container}>
      <Toaster />
      <div className={styles.content}>
        <h2 className={styles.title}>Get in Touch</h2>
        
        <div className={styles.formContainer}>
          <div className={styles.description}>
            <p>
              We're always open to new opportunities and collaborations. Whether you're interested in:
            </p>
            <ul className={styles.reasonsList}>
              <li>Strategic partnerships and collaborations</li>
              <li>Research opportunities in AI communication</li>
              <li>Integration ideas and suggestions</li>
              <li>Investment and funding discussions</li>
              <li>General inquiries about our technology</li>
            </ul>
            <p>
              Our team is here to listen and explore potential opportunities together.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your ideas or questions..."
                required
                rows={5}
                disabled={isSubmitting}
              />
            </div>

            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 