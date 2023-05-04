import React from "react";
import { Link, useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const Chef = ({ chef }) => {
   const navigation = useNavigation();
   console.log(navigation.state)
   if (navigation.state === "loading") {
     return <LoadingSpinner />;
   }
  const { img, name, experience, recipeNumber, likeImg, like, id } = chef;
  return (
    <div className="border p-10 rounded-lg flex flex-col">
      <img className="" src={img} alt="" />
      <h2 className="font-bold text-xl py-3">{name}</h2>
      <h2>
        {" "}
        <span className="font-bold">Experience : </span> {experience}
      </h2>
      <div className="flex gap-5 my-3">
        <p>
          <span className="font-bold">Numbers of recipes : </span>{" "}
          {recipeNumber}
        </p>
      </div>
      <div className="flex gap-5 mb-5 mt-auto">
        <div className="flex space-x-2">
          <img className="h-5" src={likeImg} alt="" />
          <p>{like}</p>
        </div>
      </div>
      <Link to={`/chefs/${id}`}>
        {" "}
        <button className="btn border-none mt-auto w-48">View Recipes</button>
      </Link>
    </div>
  );
};

export default Chef;
