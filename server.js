// server.js
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
const PORT = 5000;

// Разрешаем запросы с React (localhost:3000)
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json()); // для парсинга JSON в POST-запросах

// Настройка Nodemailer через Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mark213101@gmail.com",           // <-- твой Gmail
    pass: "aypq pxby vxnz msac",           // <-- App Password (16 символов)
  },
});

// Точка API для отправки писем
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Заполните все поля!" });
  }

const mailOptions = {
  from: "mark213101@gmail.com",          // твой Gmail
  to: "mark213101@gmail.com",            // куда приходят письма
  subject: `Сообщение от ${name}`,
  text: `Имя: ${name}\nEmail: ${email}\n\nСообщение:\n${message}`,
};


  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Письмо отправлено!" });
  } catch (err) {
    console.error("Ошибка отправки:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
