import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Component/Header";
import Search from "./Component/Search";
import Restaurant from "./Component/Restaurant";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((res) => res.json())
      .then((response) => {
        setRestaurants(response);
        setFilteredRestaurants(response); // Initialize filtered restaurants with all restaurants
      })
      .catch((err) => {
        console.log("Failed to fetch data:", err.message);
      });
  }, []);

  return (
    <div className="container flex flex-col items-center p-4 mx-auto space-y-6">
      <Header />
      <Search
        restaurants={restaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <Restaurant restaurants={filteredRestaurants} />
    </div>
  );
}

export default App;
