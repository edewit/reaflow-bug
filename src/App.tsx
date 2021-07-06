import React, { useState, useEffect } from 'react';
import { Canvas } from 'reaflow';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
      <Canvas
        nodes={[
          {
            id: "1",
            text: "1",
          },
          {
            id: "2",
          },
          {
            id: "2-1-1",
            text: "2 > 2.1",
            parent: "2",
          },
          {
            id: "3",
            text: "3",
          },
        ]}
        edges={[
          {
            id: "1-2",
            from: "1",
            to: "2",
          },
          {
            id: "2-3",
            from: "2",
            to: "3",
          },
        ]}
      />
      </header>
    </div>
  );
}

export default App;
