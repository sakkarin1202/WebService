import React, { useState, useEffect } from "react";
import Card from "./Card";

const Restaurant = ({ restaurants }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {restaurants.map((resto) => (
        <Card
          key={resto.id}
          img={resto.img}
          title={resto.title}
          type={resto.type}
        />
      ))}
    </div>
  );
};

export default Restaurant;
