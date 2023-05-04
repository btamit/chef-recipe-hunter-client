import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Feature from "./Feature";
import Chef from "./Chef";
const Home = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  }, []);
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/features")
      .then((res) => res.json())
      .then((data) => setFeatures(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="bg-gray-900 pb-48">
        <div className="my-container flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg  lg:pr-1 lg:mb-0">
            <div className="max-w-xl mb-6 lg:mt-8">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none text-white">
                Fun and easy to become Master cook and{" "}
                <br className="hidden md:block" /> Cook anything with <br></br>
                <span className="inline-block text-blue-400"> The experts</span>
              </h2>

              <p className="text-base text-white md:text-lg">
                Explore thousands of job opportunities with all the information
                you need. Its your future. Come find it. Manage all your job
                application from start to finish.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <Link to="" className="btn md:w-auto md:mr-4 border-none">
                <div className="inline-flex items-center justify-center w-full h-full">
                  <p className="mr-3">Get Started</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="relative lg:w-1/2 ">
            <div className="w-full lg:ml-auto h-60  sm:h-96">
              <img
                src="https://i0.wp.com/cuisinehelvetica.com/wp-content/uploads/2017/08/chefalps_2017_dominiquecrenn_69a8512.jpg?ssl=1"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-container">
        <h2 className="text-center text-5xl font-bold mb-5">
          At a glance our all chefs
        </h2>
        <p className="text-center">
          Explore hundreds of chefs with all the information you need. It will
          help you to choose your best chef.
        </p>
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {chefs.map((chef) => (
            <Chef key={chef.id} chef={chef}></Chef>
          ))}
        </div>
      </div>
      <div className="my-container">
        <h2 className="text-center text-5xl font-bold mb-5">
          Explore Top Recipes
        </h2>
        <p className="text-center">
          There are countless great recipes out there, and which ones are
          considered the "best" can be subjective depending on individual tastes
          and preferences. However, here are a few classic and universally loved
          recipes that are often considered some of the best:
        </p>
        <div className="grid md:grid-cols-4 gap-5 mt-12">
          {features.map((feature) => (
            <Feature key={feature.id} feature={feature}></Feature>
          ))}
        </div>
      </div>
      <div className="my-container flex gap-5 items-center flex-col justify-between lg:flex-row">
        <div>
          <img
            className=""
            src="https://www.browneyedbaker.com/wp-content/uploads/2011/07/TOP-10-BEST-MAIN-DISH-RECIPES.jpg"
            alt=""
          />
        </div>
        <div>
          <hr className=" border-4" />
          <h2 className="text-5xl font-extrabold my-5">Stay updated</h2>
          <hr className="border-4" />
          <p className="font-bold text-xl my-10">
            Don't miss any update info and content about our platform services.
            Subscribe to out newsletter !
          </p>
          <input
            className="border border-black p-3 md:p-5"
            type="text"
            placeholder="Enter your email"
          />
          <button className="border bg-yellow-500 p-3 md:p-5 font-medium">
            Subscribe Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
