"use client";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-slideshow-image/dist/styles.css";
import { UserDataInterface } from "../interfaces/userDataInterface";

export default function ResumePanel({
  userData,
}: {
  userData: UserDataInterface;
}) {
  const portfolioData = userData.portfolioData;

  return (
    <div className="relative bg-white rounded-lg mt-8 p-6 py-10">
      {/* <div className='relative inline-block'>
        <span className='absolute -left-1 -right-1 bottom-1 h-1.5 bg-sky-200' />
        <h2 className='relative text-base font-bold text-gray-800'>Portfolio</h2>
      </div> */}

      <div className="slide-container mb-16">
        <h3 className="text-lg font-bold text-gray-800 text-center">
          Construction Material Trading App
        </h3>
        <div className="mt-4 mb-4 text-gray-400">
          A cloud-based construction material trading and management platform.
          It facilitates communications between suppliers and buyers, optimizing
          the rental and trading process for construction materials.
        </div>
        <div className="pl-2 pr-8">
          <ImageGallery
            showIndex={true}
            items={portfolioData.yzj.photos}
            thumbnailPosition={"left"}
            lazyLoad={true}
          />
        </div>
      </div>
      <div className="slide-container mb-16">
        <h3 className="text-lg font-bold text-gray-800 text-center">
          Learning Management System App
        </h3>
        <div className="mt-4 mb-4 text-gray-400">
          A learning management app.
        </div>
        <div className="pl-2 pr-8">
          <ImageGallery
            showIndex={true}
            items={portfolioData.sxy.photos}
            thumbnailPosition={"left"}
            lazyLoad={true}
          />
        </div>
      </div>
      <div className="slide-container mb-16">
        <h3 className="text-lg font-bold text-gray-800 text-center">
          Other Projects
        </h3>
        <div className="mt-4 mb-4 text-gray-400">Other small projects.</div>
        <div className="pl-2 pr-8">
          <ImageGallery
            showIndex={true}
            items={portfolioData.other.photos}
            thumbnailPosition={"left"}
            lazyLoad={true}
          />
        </div>
      </div>
    </div>
  );
}
