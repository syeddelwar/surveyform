"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SurveyQuestion from '../components/SurveyQuestion';
import LeftHeading from '../components/LeftHeading';
import surveyImg from '../../assets/survey.png';
import Image from 'next/image';
import '../components/style.css';
import logo from '../../assets/logo.png';
import { MdCall } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  const [showSurvey, setShowSurvey] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [formData, setFromData] = useState(null);
  // const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Animation will only occur once
      mirror: false, // Animation will not mirror when scrolling back up
    });
  }, []);

  const handleGetStarted = () => {
    setShowSurvey(true);
    setShowLogo(true);
  };

  const handleBack = () => {
    setShowSurvey(false);
    setShowLogo(false);
    // router.back();
  };


 


  return (
    <>
      <div className="">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* ..........  left image............ */}
          <div className="left w-full lg:w-[40%] py-6 lg:h-[100vh] flex  justify-center items-center">
          <div className="">
            {showLogo && (
              
                <div className="flex justify-center">   
                  <a href="/survey">  
                  <Image
                    className="w-[30%] flex  items-center justify-start space-x-3 pl-[6%] pt-[0%]"
                    src={logo}
                    alt=""
                  /></a>
                
                </div>
            
            )}
            <Image
              data-aos="fade-up"
              data-aos-duration="700"
              className="w-full"
              src={surveyImg}
              alt=""
            />
              </div>
          </div>

          {/* ..........  right top section............ */}
          <div className="right-section w-full lg:w-[60%] pb-16 lg:pb-5">
            <div
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
              className=" flex items-center justify-end space-x-3 pr-[4%] pt-[4%]"
            >
              <p className="text-white text-xl p-2 rounded bg-black">
                <MdCall></MdCall>
              </p>
              <div className="">
                <h1 className="font-bold text-black">Need Help?</h1>
                <p className="text-sm">Call an Expert 1(866)429-9667</p>
              </div>
            </div>

            {/* ..........  right section............ */}
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="600"
              className=""
            >
              {showSurvey ? (
                <SurveyQuestion  setFromData={setFromData} formData={formData}/>
              ) : (
                <>
                  <LeftHeading setFromData={setFromData} formData={formData} />
                  <div className="pl-5 lg:pl-[8%]">
                    <button
                      className="bg-purple-800 py-2 px-8 hover:text-white font-semibold text-white"
                      onClick={handleGetStarted}
                    >
                      <span>Get Started</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end pr-5 mt-14 mb-14 items-center space-x-7">
          {/* {showSurvey && (
            <button className="bg-purple-800 py-3 px-10 font-semibold text-white" onClick={handleBack}>
              Prev
            </button>
          )} */}
        </div>
      </div>
    </>
  );
};

export default Main;
