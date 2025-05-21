import { useState } from "react";

import { ErrorIcon } from "../../../assets/icons/ErrorIcon";
import { validateEmail } from "../../../utils/validateEmail";
import { Button } from "../../Button/Button";
import styles from "./NewsletterForm.module.scss";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email can't be empty");
      setSubscribed(false);
      return;
    }

    if (!validateEmail(email)) {
      setError("Whoops, make sure it's an email");
      setSubscribed(false);
      return;
    }

    setError("");
    setEmail("");
    setSubscribed(true);

    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${error ? styles.invalid : ""}`}
          />

          {error && <ErrorIcon />}
        </div>

        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>

      <div className={styles.buttonContainer}>
        <Button type="submit" variant="tertiary">
          Contact Us
        </Button>
      </div>

      {subscribed && (
        <p className={styles.successMessage}>
          Thank you! You have been subscribed to our newsletter.
        </p>
      )}
    </form>
  );
};
