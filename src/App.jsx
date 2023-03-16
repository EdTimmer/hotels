import { useState, useEffect } from 'react';
import HotelName from './components/HotelName';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/hotels')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  if (!data) return;

  return (
    <div className="App">
      <h1>HOTELS</h1>
      <div>
        {data.map((hotel) => {
          return <HotelName hotel={hotel.name} />;
        })} 
      </div>
    </div>
  );
}

export default App;
