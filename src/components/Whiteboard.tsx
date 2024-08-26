import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import useWebSocket from '../hooks/useWebSocket';
import './Whiteboard.css';

const Whiteboard: React.FC = () => {
  const canvasRef = useRef<fabric.Canvas>();

  useEffect(() => {
    const canvas = new fabric.Canvas('whiteboard', {
      width: 800,
      height: 600,
      backgroundColor: '#ffffff',
    });
    canvasRef.current = canvas;

    return () => {
      canvas.dispose();
    };
  }, []);

  const handleDraw = () => {
    const circle = new fabric.Circle({
      radius: 20,
      fill: 'red',
      left: 100,
      top: 100,
    });
    canvasRef.current?.add(circle);
  };

  return (
    <div>
      <canvas id="whiteboard"></canvas>
      <button onClick={handleDraw}>Draw Circle</button>
    </div>
  );
};

export default Whiteboard;
