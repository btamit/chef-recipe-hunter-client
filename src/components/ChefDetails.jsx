import { useLoaderData, useNavigation} from 'react-router-dom';
import { FaEye, FaHeart, FaStar} from "react-icons/fa";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
const ChefDetails = () => {

    const navigation = useNavigation();
      console.log(navigation.state);
    if(navigation.state === 'loading'){
      return <LoadingSpinner/>
    }

    const data = useLoaderData();
    const { img, recipePicOne, recipePicTwo, recipePicThree, recipePicFour ,description,name,experience,recipeNumber,likeImg,like} =
      data;
    const [activeHeartOne, setActiveHeartOne] = useState(false);
    const [activeHeartTwo, setActiveHeartTwo] = useState(false);
    const [activeHeartThree, setActiveHeartThree] = useState(false);
    const [activeHeartFour, setActiveHeartFour] = useState(false);
  const notifyOne = () => {
    toast("This is my favorite recipe");
    setActiveHeartOne(true);
  };
  const notifyTwo = () => {
    toast("This is my favorite recipe");
    setActiveHeartTwo(true);
  };
  const notifyThree = () => {
    toast("This is my favorite recipe");
    setActiveHeartThree(true);
  };
  const notifyFour = () => {
    toast("This is my favorite recipe");
    setActiveHeartFour(true);
  };
    return (
      <>
        <div className="my-container flex flex-col">
          <img className="" src={img} alt="" />
          <h2 className="font-bold text-xl py-3">{name}</h2>
          <h4 className="mb-5">
            {" "}
            <span className="font-bold">Dercription : </span> {description}
          </h4>
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
        </div>
        <div className="my-container bg-gray-100 rounded">
          <h2 className="text-center text-4xl font-extrabold mb-12">
            Explore More Best Recipes
          </h2>
          <div className="flex gap-3">
            <div className="bg-gray-400 p-5 w-1/4 rounded-lg">
              <img
                className="w-64 h-52 mb-8 bg-gray-200 p-4 rounded"
                src={recipePicOne}
                alt=""
              />
              <h2 className="font-bold text-xl my-5">Beef Wellington</h2>
              <h2>
                <span className="font-semibold">Ingredients : </span>
                tenderloin, puff pastry, prosciutto, mushroom duxelles, egg yolk
              </h2>
              <h2>
                <span className="font-semibold">Cooking Methods : </span>
                The recipe is made with butter, garlic, and green onions, while
                the grits are cooked with milk and butter until creamy.
              </h2>
              <div className="flex gap-5 pt-3 items-center">
                <div className="flex gap-1">
                  <FaStar className="text-yellow-300"></FaStar>
                  <FaStar className="text-yellow-300"></FaStar>
                  <FaStar className="text-yellow-300"></FaStar>
                  <FaStar className="text-yellow-300"></FaStar>
                  <FaStar className="text-yellow-300"></FaStar>
                </div>
                <div className="flex gap-2 items-center">
                  <FaEye></FaEye>
                  <p>20000 views</p>
                  <FaHeart
                    onClick={notifyOne}
                    className={
                      activeHeartOne
                        ? "text-gray-500 cursor-pointer"
                        : "text-red-600 cursor-pointer"
                    }
                  ></FaHeart>
                </div>
              </div>
            </div>
            <div className="bg-gray-400 w-1/4 p-5 rounded-lg">
              <img
                className="w-64 h-52 mb-8 bg-gray-200 p-2 rounded"
                src={recipePicTwo}
                alt=""
              />
              <h2 className="font-bold text-xl my-5">Spaghetti Carbonara</h2>
              <h2>
                <span className="font-semibold">Ingredients : </span>
                yogurt, tomato sauce, ginger, garlic, garam masala, cilantro
              </h2>
              <h2>
                <span className="font-semibold">Cooking Methods : </span>
                The ribs are rubbed with a spice mixture and smoked or grilled
                until tender, then basted with BBQ sauce.
              </h2>
              <div className="flex gap-5 pt-3 items-center">
                <div className="flex gap-1">
                  <FaStar className="text-yellow-300"></FaStar>
                  <FaStar className="text-yellow-300"></FaStar>
                  <FaStar className="text-yellow-300"></FaStar>
                  <FaStar className="text-yellow-300"></FaStar>
                  <FaStar className="text-yellow-300"></FaStar>
                </div>
                <div className="flex gap-2 items-center">
                  <FaEye></FaEye>
                  <p>15000 views</p>
                  <FaHeart
                    onClick={notifyTwo}
                    className={
                      activeHeartTwo
                        ? "text-gray-500 cursor-pointer"
                        : "text-red-600 cursor-pointer"
                    }
                  ></FaHeart>
                </div>
              </div>
            </div>
            <div className="bg-gray-400 w-1/4 p-5 rounded-lg">
              <img
                className="w-64 h-52 mb-8 bg-gray-200 p-2 rounded"
                src={recipePicThree}
                alt=""
              />
              <h2 className="font-bold text-xl my-5">Boeuf Bourguignon</h2>
              <h2>
                <span className="font-semibold">Ingredients : </span>
                bacon, onion, carrot, red wine, beef broth, thyme, bay leaf
              </h2>
              <h2>
                <span className="font-semibold">Cooking Methods : </span>
                The chicken is marinated in a mixture of yogurt, ginger, garlic,
                and spices, then cooked in a tomato-based sauce.
              </h2>
              <div className="flex gap-5 pt-3 items-center">
                <div className="flex gap-1">
                  <FaStar className="text-yellow-300"></FaStar>
                  <FaStar className="text-yellow-300"></FaStar>
                  <FaStar className="text-yellow-300"></FaStar>
                  <FaStar className="text-yellow-300"></FaStar>
                  <FaStar className="text-yellow-300"></FaStar>
                </div>
                <div className="flex gap-2 items-center">
                  <FaEye></FaEye>
                  <p>25000 views</p>
                  <FaHeart
                    onClick={notifyThree}
                    className={
                      activeHeartThree
                        ? "text-gray-500 cursor-pointer"
                        : "text-red-600 cursor-pointer"
                    }
                  ></FaHeart>
                </div>
              </div>
            </div>
            <div className="bg-gray-400 w-1/4 p-5 rounded-lg">
              <img
                className="w-64 h-52 mb-8 bg-gray-200 p-2 rounded"
                src={recipePicFour}
                alt=""
              />
              <h2 className="font-bold text-xl my-5">Coq Au Vin</h2>
              <h2>
                <span className="font-semibold">Ingredients : </span>
                flour, sugar, cocoa, powder, baking soda, eggs, milk, vegetable
                oil
              </h2>
              <h2>
                <span className="font-semibold">Cooking Methods : </span>
                The item is seared and coated with a layer of mushroom duxelles,
                then wrapped in baked until golden brown.
              </h2>

              <div className="flex gap-5 pt-3 items-center">
                <div className="flex gap-1">
                  <FaStar className="text-yellow-300"></FaStar>
                  <FaStar className="text-yellow-300"></FaStar>
                  <FaStar className="text-yellow-300"></FaStar>
                  <FaStar className="text-yellow-300"></FaStar>
                  <FaStar className="text-yellow-300"></FaStar>
                </div>
                <div className="flex gap-2 items-center">
                  <FaEye></FaEye>
                  <p>10000 views</p>
                  <FaHeart
                    onClick={notifyFour}
                    className={
                      activeHeartFour
                        ? "text-gray-500 cursor-pointer"
                        : "text-red-600 cursor-pointer"
                    }
                  ></FaHeart>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </>
    );
};
export default ChefDetails;