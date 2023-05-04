import React from "react";

const Feature = ({ feature }) => {
  const { img, title, subTitle, icon, eyeIcon, views } = feature;
  return (
    <div className="bg-gray-100 p-5 rounded flex flex-col">
      <img className="w-64 mb-8 bg-gray-200 p-2 rounded" src={img} alt="" />
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{subTitle}</p>
      <div className="flex mt-auto gap-10">
        <div className="flex">
          <img className="w-5" src={icon} alt="" />
          <img className="w-5" src={icon} alt="" />
          <img className="w-5" src={icon} alt="" />
          <img className="w-5" src={icon} alt="" />
          <img className="w-5" src={icon} alt="" />
        </div>
        <div className="flex gap-2">
          <img className="w-5" src={eyeIcon} alt="" />
          <p>{views}</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
