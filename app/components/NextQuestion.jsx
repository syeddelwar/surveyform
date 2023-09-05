"use client";

import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import "aos/dist/aos.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Add the CSS for styling
import { useRouter } from "next/navigation";

const init = {
  name: "",
  email: "",
  satisfied: "",
  recommend: "",
  staffCommunicate1: "",
  staffCommunicate2: "",
  staffCommunicate3: "",
  satisfiedRatting: "",
  comment: "",
};

const NextQuestion = ({
  formData,
  isSubmitVisible,
  currentDataIndex,
  handleNext,
  handlePrev,
}) => {
  const [selectedRating, setSelectedRating] = useState(null);
  const rattingArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [isFetching, setIsFetching] = useState(false);

  const [final, setFinal] = useState(init);

  const router = useRouter();
  useEffect(() => {
    if (formData) {
      setFinal({
        ...final,
        name: formData.name,
        email: formData.email,
        satisfied: formData.question1,
        recommend: formData.question2,
        staffCommunicate1: formData.question3,
        staffCommunicate2: formData.question4,

        staffCommunicate3: formData.question5,
      });
    }
  }, [formData]);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
    setFinal({
      ...final,
      satisfiedRatting: rating.toString(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData) return;

    try {
      setIsFetching(true);
      const response = await axios.post(
        `https://new-survey-back.vercel.app/api/details`,
        final
      );

      const result = response.data;

      if (result.ok) {
        toast.success("your information is stored!");
        setIsFetching(false);
        router.push("/");
        setFinal(init);
      } else {
        setIsFetching(false);
        toast.error("internal server error!");
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <div className="pl-[2%]">
        <form>
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
                      isSelected ? "bg-purple-800 text-white" : "bg-white"
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
              <h2 className="font-medium text-sm text-gray-600 mt-4">
                Very Unsatisfied
              </h2>
              <h2 className="font-medium text-sm text-gray-600 mt-4">
                Very Satisfied
              </h2>
            </div>
          </div>

          <h2 className="font-semibold text-zinc-800 mb-3 mt-7">
            {" "}
            7. Your Comment-
          </h2>

          <textarea
            onChange={(e) => setFinal({ ...final, comment: e.target.value })}
            className="w-[60%] lg:max-w-4xl border-2 border-gray-300 outline-none p-5"
            name=""
            id=""
            cols="50"
            rows="6"
          ></textarea>

          <div className="flex justify-end pr-5 mt-14 mb-14 items-center space-x-7">
            {currentDataIndex > 0 && (
              <button
                className="bg-purple-800 py-1 px-8 font-semibold text-white"
                onClick={handlePrev}
              >
                <span>Prev</span>
              </button>
            )}
            {isSubmitVisible ? (
              <button
                onClick={handleSubmit}
                disabled={isFetching}
                type="submit"
                className="bg-purple-800 py-1 px-8 font-semibold text-white"
              >
                <span> Submit</span>
              </button>
            ) : (
              <button
                className="bg-purple-800 py-1 px-8 font-semibold text-white"
                onClick={handleNext}
              >
                <span>Next</span>
              </button>
            )}
          </div>
        </form>
        <ToastContainer position="bottom-left" />
      </div>
    </>
  );
};

export default NextQuestion;
