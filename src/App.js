import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [fizzBuzzList, setFizzBuzzList] = useState();

  useEffect(() => {
    fetch('.netlify/functions/fizzBuzz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ number: 100 }),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log('dtaa', data);
        setFizzBuzzList(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return <div className='App'>{fizzBuzzList}</div>;
}

export default App;
