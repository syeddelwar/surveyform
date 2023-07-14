"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { data } from './data.js';
import { AiFillStar } from 'react-icons/ai';
import NextQuestion from './NextQuestion.jsx';

const SurveyQuestion = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentData, setCurrentData] = useState(data.slice(0, 3));
  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const [isSubmitVisible, setIsSubmitVisible] = useState(false);


  const handleOptionChange = (questionId, optionId) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionId]: optionId,
    }));
  };

  const uncheckOtherOptions = (options, selectedOptionId) => {
    options.forEach((option) => {
      if (option.id !== selectedOptionId) {
        const element = document.getElementById(option.id);
        if (element) {
          element.checked = false;
        }
      }
    });
  };

  const OptionList = ({ options, questionId, selectedOption, handleOptionChange }) => {
    return options.map((option) => (
      <div
        className={`${selectedOption === option.id && 'bg-purple-300'} flex items-center border-b border-gray-300 py-2 hover:bg-purple-300 pl-[4%] max-w-md`}
        key={option.id}
      >
        <input
          type="radio"
          id={option.id}
          name={`surveyOption_${questionId}`}
          className="mr-2 border-2 border-purple-950 bg-white w-4 h-4 rounded-none accent-purple-800"
          onChange={() => handleOptionChange(questionId, option.id)}
          checked={selectedOption === option.id}
          required
        />
        <label className="cursor-pointer" htmlFor={option.id}>
          {option.label}
        </label>
      </div>
    ));
  };

  const handleNext = () => {
    const nextIndex = currentDataIndex + 3;
    setCurrentDataIndex(nextIndex);
    setCurrentData(data.slice(nextIndex, nextIndex + 3));

    if (nextIndex === 3) {
      setIsSubmitVisible(true);
    }
  };

  const handlePrev = () => {
    const prevIndex = currentDataIndex - 3;
    setCurrentDataIndex(prevIndex);
    setCurrentData(data.slice(prevIndex, prevIndex + 3));

    if (prevIndex !== 0) {
      setIsSubmitVisible(false);
    }
  };


  return (
    <div className="pl-[7%] pt-[10%]">
      <form>
        {currentData.map((questionData, index) => (
          <div className="mb-5" key={questionData.id}>
            <h2 className="font-semibold text-zinc-800 mb-1 max-w-xl">
              {`${currentDataIndex + index + 1}. ${questionData.question}`}
            </h2>
            <OptionList
              options={questionData.label.map((label, index) => ({
                id: `option${index + 1}`,
                label,
              }))}
              questionId={`question${questionData.id}`}
              selectedOption={selectedOptions[`question${questionData.id}`]}
              handleOptionChange={handleOptionChange}
            />
          </div>
        ))}

        {currentDataIndex === 3 && (
          <>
           <NextQuestion></NextQuestion>
            <div className="flex justify-end pr-5 mt-14 mb-14 items-center space-x-7">
              {currentDataIndex > 0 && (
                <button className="bg-purple-800 py-1 px-8 font-semibold text-white" onClick={handlePrev}>
                   <span>Prev</span>
                </button>
              )}
              {isSubmitVisible ? (
                <button className="bg-purple-800 py-1 px-8 font-semibold text-white">
                 <span>  Submit</span>
                </button>
              ) : (
                <button className="bg-purple-800 py-1 px-8 font-semibold text-white" onClick={handleNext}>
                  <span>Next</span>
                </button>
              )}
            </div>
          </>
        )}

        {currentDataIndex !== 3 && (
          <div className="flex justify-end pr-5 mt-14 mb-14 items-center space-x-7">
          
        
            {currentDataIndex > 0 && (
              <button className="bg-purple-800 py-1 px-8 font-semibold text-white" onClick={handlePrev}>
                <span>Prev</span>
              </button>
            )}
            {currentDataIndex + 3 < data.length && (
              <button className="bg-purple-800 py-1 px-8 font-semibold text-white" onClick={handleNext}>
               <span> Next</span>
              </button>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default SurveyQuestion;




