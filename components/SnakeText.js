import { useState, useEffect } from 'react';

export default function SnakeText({ text }) {

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setIdx(prev => (prev + 1) % text.length);
    }, 100);
  }, []);

  return (
    <span>
      <span>{text.slice(0, idx)}</span>
      <span className="text-red-500 text-8xl font-bold cursor-pointer">{text[idx]}</span>
      <span>{text.slice(idx + 1, text.length)}</span>
    </span>
  );
}