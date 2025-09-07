// src/components/Contact.jsx
import React, { useState } from "react";
import "../App.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // Для сообщений об успехе/ошибке

  // Обновляем состояние при вводе
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Отправка формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Отправка...");

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Сообщение отправлено ✅");
        setFormData({ name: "", email: "", message: "" }); // очистка формы
      } else {
        setStatus("Ошибка отправки: " + data.error);
      }
    } catch (err) {
      setStatus("Ошибка сети: " + err.message);
    }
  };

  return (
    <section id="contact">
      <h2>Связаться</h2>
      <form onSubmit={handleSubmit}>
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
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Сообщение (обязательно введите ваши контактные данные, иначе сообщение не будет рассмотрено)"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Отправить</button>
      </form>
      {status && <p style={{ marginTop: "10px", color: "#8b5cf6" }}>{status}</p>}
    </section>
  );
}

export default Contact;
