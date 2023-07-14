"use client"

import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import 'aos/dist/aos.css';

const NextQuestion = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const rattingArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <>
      <div className="pl-[2%]">
        <h2 className="font-semibold text-zinc-800 mb-3 mt-7">
          6. How satisfied are you with services from Axzons 
        </h2>
        <div className="flex flex-col justify-between space-x-1">
          <div className="flex">
            {rattingArray.map((item, index) => {
              const isSelected = selectedRating === item;
              return (
                <p
                  className={`w-12 h-12 text-xl border border-gray-200 shadow cursor-pointer rounded-full flex justify-center items-center flex-wrap ${
                    isSelected ? 'bg-purple-800 text-white'  : 'bg-white'
                  }`}
                  key={index}
                  onClick={() => handleRatingClick(item)}
                >
                  {item}
                </p>
              );
            })}
          </div>
          <div className="flex justify-between items-center max-w-md">
            <h2 className="font-medium text-sm text-gray-600 mt-4">Very Unsatisfied</h2>
            <h2 className="font-medium text-sm text-gray-600 mt-4">Very Satisfied</h2>
          </div>
        </div>

        <h2 className="font-semibold text-zinc-800 mb-3 mt-7"> 7. Your Comment-</h2>

        <textarea className="w-[60%] lg:max-w-4xl border-2 border-gray-300 outline-none p-5"
          name=""
          id=""
          cols="50"
          rows="6">

        </textarea>
        {/* <textarea
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"


          className="w-[80%] lg:max-w-5xl border-2 border-gray-300 outline-none p-5"
          name=""
          id=""
          cols="50"
          rows="6"
        ></textarea> */}
      </div>
    </>
  );
};

export default NextQuestion;
