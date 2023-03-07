// import { useState, useEffect } from 'react';
import HotelName from './components/HotelName';

function App() {
  // const [hotels, setHotels] = useState([]);

  // useEffect(() => {
  //   fetch('api/hotels')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setHotels(data);
  //     });
  // }, []);
  const hotels = ['Metropolitan', 'Yalta Ultra Luxury Resort', 'Waldorf'];

  // fetch from BE API to get names of hotels as an array, e.g, ["Metropolitan", "Yalta Ultra Luxury Resort", "Waldorf"]
  return (
    <div className="App">
      <h1>HOTELS</h1>
      <div>
        {hotels.map((hotel) => {
          return (
            <HotelName hotel={hotel} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
