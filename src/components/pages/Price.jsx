import React from "react";
import "../../App.css";
const priceList = [
  {
    service: "Basic Video Editing (up to 5 min)",
    price: "$18",
    description: "Cutting, transitions, basic color correction, simple titles.",
  },
  {
    service: "Standard Editing (up to 15 min)",
    price: "$42",
    description: "Advanced transitions, color grading, sound balancing, titles.",
  },
  {
    service: "YouTube Package",
    price: "$60",
    description: "Editing, branding, intro/outro, thumbnail, subtitles.",
  },
  {
    service: "Shorts/Reels/TikTok (up to 1 min)",
    price: "$8",
    description: "Fast turnaround, trendy effects, captions.",
  },
  {
    service: "Promo/Commercial Video",
    price: "$95+",
    description: "Full production, effects, motion graphics, sound design.",
  },
];

export default function Price() {
  return (
    <section className="price-section">
      <h2>Video Editing Price List</h2>
      <ul className="price-list" style={{ listStyleType: "none", padding: 0 }}>
        {priceList.map((item, idx) => (
          <li key={idx} className="price-item">
            <h3>{item.service}</h3>
            <p><strong>{item.price}</strong></p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}