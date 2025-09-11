import React, { useState } from "react";
import "../App.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Отправка...");

    try {
      const response = await fetch(
        "https://portfolio-server-hf5l.onrender.com/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus("Сообщение отправлено!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Ошибка отправки. Попробуйте позже.");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      setStatus("Ошибка отправки. Попробуйте позже.");
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Связаться со мной</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Ваш Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Сообщение"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Отправить</button>
      </form>
      <p className="status-message">{status}</p>
    </section>
  );
}

export default Contact;
