import { useState, useEffect } from 'react';

export default function SpazCard({ className, children }) {
  const [top, setTop] = useState(10);
  const [left, setLeft] = useState(10);
  const [zIndex, setZIndex] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    setInterval(() => {
      setTop(Math.floor(Math.random() * 10));
      setLeft(Math.floor(Math.random() * 10));
      setZIndex(Math.floor(Math.random() * 100));
    }, 100);

    setInterval(() => {
      setBackgroundColor(`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`);
      setColor(`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`);
    }, 300, 0);
  }, []);

  return (
    <div className={className} style={{
      position: 'relative',
      top, left, zIndex, backgroundColor,
    }}>
      {children}
    </div>
  );
}