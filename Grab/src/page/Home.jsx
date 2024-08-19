import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import Header from "../Component/Header";
import Search from "../Component/Search";
import Restaurant from "../Component/Restaurant";
import RestuarantService from "../services/restaurant.service";
import Swal from "sweetalert2";

function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    const getRestaurant = async () => {
      try {
        const response = await RestuarantService.getAllrestaurant();
        if (response.status === 200) {
          setRestaurants(response.data);
          setFilteredRestaurants(response.data);
        }
      } catch (error) {
        Swal.fire({
          title: "User Registration",
          text: error?.response?.data?.message || error.message,
          icon: "error",
        });
      }
    };
    getRestaurant();
  }, []);

  //   fetch("http://localhost:3000/restaurants")
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setRestaurants(response);
  //       setFilteredRestaurants(response);
  //     })
  //     .catch((err) => {
  //       console.log("Failed to fetch data:", err.message);
  //     });
  // }, []);

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
export default Home;
