import React from 'react';
import GoodsCard from './components/GoodsCard';
import './App.css'; // Підключаємо стилі
import appleImage from './images/apple.jpg';
import bananaImage from './images/banana.jpg';
import pearImage from './images/pear.jpg';
import peachImage from './images/peach.jpg';
import lemonImage from './images/lemon.jpg';
import bergamotImage from './images/bergamot.jpg';

function App() {
  return (
    <div className="goods-container"> {/* Додаємо контейнер */}
      <GoodsCard name="Apple" image={appleImage} price={1.5} />
      <GoodsCard name="Banana" image={bananaImage} price={0.8} />
      <GoodsCard name="Pear" image={pearImage} price={1.2} />
      <GoodsCard name="Peach" image={peachImage} price={2.0} />
      <GoodsCard name="Lemon" image={lemonImage} price={1.0} />
      <GoodsCard name="Bergamot" image={bergamotImage} price={3.5} />
    </div>
  );
}

export default App;
