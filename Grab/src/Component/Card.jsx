import React from "react";

const Card = ({ img, title, type,id }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{type}</p>
        <div className="card-actions justify-end">
          <a href="{}" className="btn btn-primary">Edit Now</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
