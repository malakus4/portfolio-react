import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({ loading: true, success: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          loading: false,
          success: true,
          message: "Message sent successfully!",
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        message: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Let's Work Together</h2>
        <p className="contact-subtitle">
          Have a project in mind? Send me a message.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" disabled={status.loading}>
            {status.loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status.message && (
          <p
            className={`status-message ${status.success ? "success" : "error"}`}
          >
            {status.message}
          </p>
        )}
      </div>
    </section>
  );
}
