"use client";
import React from "react";
import {
  FaHouseChimneyUser,
  FaLaptopCode,
  FaBriefcase,
  FaSchool,
} from "react-icons/fa6";
import { IconType } from "react-icons";
import { UserDataInterface } from "../interfaces/userDataInterface";

const leftBorderClassNames = " ml-[29px] border-l-[2px] border-l-gray-300 ";

function SectionTitle(title: string, iconName: string) {
  const iconsMapping: { [key: string]: IconType } = {
    FaHouseChimneyUser,
    FaLaptopCode,
    FaBriefcase,
    FaSchool,
  };
  const IconComponent: IconType = iconsMapping[iconName];
  return (
    <>
      <div className="flex justify-content items-center">
        <div className="flex justify-center items-center rounded-full bg-sky-600 w-[60px] h-[60px]">
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-medium text-gray-800 ml-4">{title}</h3>
      </div>
      <div className="flex">
        <div className={"h-8 " + leftBorderClassNames} />
      </div>
    </>
  );
}

export default function ResumePanel({
  userData,
}: {
  userData: UserDataInterface;
}) {
  return (
    <div className="relative bg-white rounded-lg mt-8 p-6 py-10">
      <div className="relative inline-block">
        <span className="absolute -left-1 -right-1 bottom-1 h-1.5 bg-sky-200" />
        <h2 className="relative text-base font-bold text-gray-800">Resume</h2>
      </div>
      <div className="mt-8">
        {SectionTitle("Work History", "FaBriefcase")}
        {userData.resumeData.resumePanel.workHistory.map((item, index) => {
          return (
            <div
              className={"relative pl-6 pb-10 " + leftBorderClassNames}
              key={index}
            >
              <div className="absolute left-0 top-0 w-[10px] h-[10px] " />
              <div className="flex justify-center items-center">
                <div className="flex-auto font-medium">
                  {item.title},{" "}
                  <span className="font-thin">{item.company}</span>
                </div>
                <div className="ml-4 text-sm">{item.duration}</div>
              </div>
              {item.descriptions.map((item2, index2) => {
                return (
                  <ul className="list-disc list-outside ms-8" key={index2}>
                    <li
                      className="doted-list text-sm text-gray-500 mt-2"
                      dangerouslySetInnerHTML={{ __html: item2 }}
                    ></li>
                  </ul>
                );
              })}
              <div className="absolute left-[-6px] top-[6px] w-[10px] h-[10px] border-sky-600 bg-white border-2 rounded-full" />
            </div>
          );
        })}
      </div>
      <div className="mt-0">
        {SectionTitle("Technical Skills", "FaLaptopCode")}
        {userData.resumeData.resumePanel.technicalSkills.map((item, index) => {
          return (
            <div
              className={"relative pl-6 pb-10 " + leftBorderClassNames}
              key={index}
            >
              <div className="absolute left-0 top-0 w-[10px] h-[10px] " />
              <div className="flex justify-center items-center">
                <div className="flex-auto font-medium">{item.title}</div>
                {/* <div className='ml-4 text-sm'>{item.itemList}</div> */}
              </div>
              <div className="text-sm text-gray-500 mt-2">{item.itemList}</div>
              <div className="absolute left-[-6px] top-[6px] w-[10px] h-[10px] border-sky-600 bg-white border-2 rounded-full" />
            </div>
          );
        })}
      </div>
      <div className="mt-0">
        {SectionTitle("Education", "FaSchool")}
        {userData.resumeData.resumePanel.education.map((item, index) => {
          return (
            <div
              className={"relative pl-6 pb-10" + leftBorderClassNames}
              key={index}
            >
              <div className="absolute left-0 top-0 w-[10px] h-[10px] " />
              <div className="flex justify-center items-center">
                <div className="flex-auto font-medium">{item.degree}</div>
                <div className="ml-4 text-sm">{item.duration}</div>
              </div>
              <div className="text-sm text-gray-500 mt-2">{item.school}</div>
              {index < userData.resumeData.resumePanel.education.length - 1 ? (
                ""
              ) : (
                <div className="absolute -left-2 w-2 top-[6px] bottom-0 bg-white" />
              )}
              <div className="absolute left-[-6px] top-[6px] w-[10px] h-[10px] border-sky-600 bg-white border-2 rounded-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
