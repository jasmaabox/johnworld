import { useState, useEffect } from 'react';

export default function WaveText({ text }) {

  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    const mid = Math.ceil(text.length / 2);
    const idxs1 = [...Array(mid).keys()].map(v => v * v * 0.1);
    const idxs2 = [...Array(mid).keys()].map(v => v * v * 0.1);
    idxs2.reverse();
    setSizes([...idxs1, ...idxs2]);

    setInterval(() => {
      setSizes(prev => [...prev.slice(1), prev[0]]);
    }, 100);
  }, []);

  return (
    <span>
      {text.split('').map((c, i) => (
        <span key={i} style={{ fontSize: `${sizes[i] / sizes.length + 1}rem` }}>{c}</span>
      ))}
    </span>
  );
}