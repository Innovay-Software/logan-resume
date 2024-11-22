'use client'

import React from 'react'
import {
  FaHouseChimneyUser,
  FaLaptopCode,
  FaBriefcase,
  FaSchool,
} from 'react-icons/fa6'
import { IconType } from 'react-icons'
import { UserDataInterface } from '../interfaces/userDataInterface'

const leftBorderClassNames =
  ' md:ml-[29px] md:border-l-[2px] md:border-l-gray-300 '

function SectionTitle(title: string, iconName: string) {
  const iconsMapping: { [key: string]: IconType } = {
    FaHouseChimneyUser,
    FaLaptopCode,
    FaBriefcase,
    FaSchool,
  }
  const IconComponent: IconType = iconsMapping[iconName]
  return (
    <>
      <div className="flex justify-content items-center">
        <div className="hidden md:flex justify-center items-center rounded-full bg-sky-600 w-[60px] h-[60px] mr-4">
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      </div>
      <div className="flex">
        <div className={'h-8 ' + leftBorderClassNames} />
      </div>
    </>
  )
}

export default function ResumePanel({
  userData,
}: {
  userData: UserDataInterface
}) {
  return (
    <div
      id="resume"
      className="relative bg-white p-6 py-10 md:mt-8 md:rounded-lg "
    >
      <div className="relative inline-block mb-8">
        <span className="absolute -left-1 -right-1 bottom-1 h-1.5 bg-sky-200" />
        <h2 className="relative text-base font-bold text-gray-800">Resume</h2>
      </div>
      <div>
        {SectionTitle('Technical Skills', 'FaLaptopCode')}
        {userData.resumeData.resumePanel.technicalSkills.map((item, index) => {
          const content: string[] = []
          item.items.map((item2, index2) => {
            content.push(item2.text)
          })
          const isLast =
            index == userData.resumeData.resumePanel.technicalSkills.length - 1
          return (
            <div
              className={`relative pl2 md:pl-6 ${leftBorderClassNames} ${
                isLast ? 'pb-16' : 'pb-5'
              }`}
              key={index}
            >
              <div className={`absolute left-0 top-0 w-[10px] h-[10px]  `} />
              <div className="flex justify-start items-start ">
                <div className="w-28 text-sm mr-2">{item.title}:</div>
                {/* <div className='ml-4 text-sm'>{item.itemList}</div> */}
                {/* </div> */}
                <div className="flex-1 text-sm text-gray-500">
                  {content.join(', ')}
                </div>
              </div>
              <div className="hidden md:block absolute left-[-6px] top-[6px] w-[10px] h-[10px] border-sky-600 bg-white border-2 rounded-full" />
            </div>
          )
        })}
      </div>
      <div>
        {SectionTitle('Work History', 'FaBriefcase')}
        {userData.resumeData.resumePanel.workHistory.map((item, index) => {
          return (
            <div
              className={'relative pb-10 md:pl-6 ' + leftBorderClassNames}
              key={index}
            >
              <div className="absolute left-0 top-0 w-[10px] h-[10px] " />
              <div className="flex justify-between items-start text-md">
                <div className="flex-1">
                  <div className="">{item.title}</div>
                  <div className="text-gray-400">{item.company}</div>
                </div>
                <div className="ml-4 mt-1 text-sm">{item.duration}</div>
              </div>
              {item.descriptions.map((item2, index2) => {
                return (
                  <ul
                    className="list-disc list-outside ms-8 text-sm text-gray-500 mt-2"
                    key={index2}
                  >
                    <div
                      className="doted-list text-sm text-gray-500 mt-2"
                      dangerouslySetInnerHTML={{ __html: item2 }}
                    />
                  </ul>
                )
              })}
              <div className="absolute left-[-6px] top-[6px] w-[10px] h-[10px] border-sky-600 bg-white border-2 rounded-full hidden md:block" />
            </div>
          )
        })}
      </div>
      <div>
        {SectionTitle('Education', 'FaSchool')}
        {userData.resumeData.resumePanel.education.map((item, index) => {
          const isLast =
            index == userData.resumeData.resumePanel.education.length - 1
          return (
            <div
              className={`relative pl2 md:pl-6 ${leftBorderClassNames} ${
                isLast ? 'pb-16' : 'pb-5'
              }`}
              key={index}
            >
              <div className="absolute left-0 top-0 w-[10px] h-[10px] " />
              <div className="flex justify-center items-center">
                <div className="flex-auto font-medium">{item.degree}</div>
                {/* <div className="ml-4 text-sm">{item.duration}</div> */}
              </div>
              <div className="text-sm text-gray-500 mt-2">{item.school}</div>
              {index < userData.resumeData.resumePanel.education.length - 1 ? (
                ''
              ) : (
                <div className="absolute -left-2 w-2 top-[6px] bottom-0 bg-white" />
              )}
              <div className="hidden md:block absolute left-[-6px] top-[6px] w-[10px] h-[10px] border-sky-600 bg-white border-2 rounded-full" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
