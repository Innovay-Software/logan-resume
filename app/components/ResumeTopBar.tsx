"use client";
import React from "react";
import ResumeTopBarButton from "./ResumeTopBarButton";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { UserDataInterface } from "../interfaces/userDataInterface";

export default function ResumeTopBar({
  userData,
  currentIndex,
  onButtonClick,
}: {
  userData: UserDataInterface;
  currentIndex: number;
  onButtonClick: (arg0: number) => any;
}) {
  return (
    <div className="relative bg-white rounded-lg">
      <div className="flex justify-center items-center absolute top-0 bottom-0 left-0 rounded-tl-lg rounded-bl-lg bg-sky-600 w-16">
        <FaHouseChimneyUser className="text-white w-8 h-8" />
      </div>
      <div className="flex items-center rounded-lg ml-20 mr-20">
        {userData.resumeData.resumeTopBar.titles.map((item, index) => {
          return (
            <ResumeTopBarButton
              key={index}
              title={item.text}
              selected={index == currentIndex}
              onclick={() => onButtonClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
}
