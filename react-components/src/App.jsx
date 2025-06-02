import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);


  useEffect(() => {
    if (localStorage.getItem('count')) {
      setCount(Number(localStorage.getItem('count')));
    };
  },[]);


  useEffect(() => {
    const handleSave = () => {
      localStorage.setItem('count', count);
    };

    window.addEventListener('beforeunload', handleSave);

    return () => {
      window.removeEventListener('beforeunload', handleSave);
    };
  });

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

        <div id='counter'>
          <Button
            className='btn-primary'
            label='-'
            onClick={() => decrement()}
          />

          <p>Count: {count}</p>

          <Button
            className={'btn-primary'}
            label={'+'}
            onClick={() => increment()}
          />
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
