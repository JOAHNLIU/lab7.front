import React from 'react';
import '../GoodsCard.css';

function GoodsCard({ name, image, price }) {
  return (
    <div className="goods-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Price: ${price}</p> {/* Додаємо ціну */}
    </div>
  );
}

export default GoodsCard;
