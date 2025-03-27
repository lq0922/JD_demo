import React, { useState, useEffect } from 'react';
import './index.css'; // 引入样式文件

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    // 自动播放功能
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 每3秒切换一次

    return () => clearInterval(timer); // 清除定时器
  }, [images.length]);

  return (
    <div className="carousel">
      {images.map((image, index: number) => (
        <div 
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};

export default Carousel;