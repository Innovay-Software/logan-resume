import React from 'react'
import { UserDataInterface } from '../interfaces/userDataInterface'

export default function ResumeSideBarMobile({
  userData,
}: {
  userData: UserDataInterface
}) {
  const metrics: string[][] = [
    [userData.resumeData.resumeSideBar.portfolios, 'Portfolios'],
    [userData.resumeData.resumeSideBar.years, 'Years'],
    [userData.resumeData.resumeSideBar.educations, 'Educations'],
  ]

  return (
    <div className="text-center bg-blue-50 py-10 pt-24 rounded-lg md:hidden ">
      <figure className="rounded-full w-1/2 aspect-square flex justify-center items-center overflow-hidden mx-auto shadow-lg shadow-blue-400">
        <img
          src="selfie3_cartoon.jpg"
          alt="avatar"
          className="w-full aspect-auto"
        />
      </figure>
      <div className="text-4xl font-bold mt-10">LOGAN DAI</div>
      <div className="text-xl text-gray-700 mt-5">Software Engineer</div>
      <div className="text-lg  mx-10 text-gray-400 mt-10">
        {userData.resumeData.resumeSideBar.summary}
      </div>
      <div className="flex justify-evenly items-center px-5 mt-10">
        {metrics.map((item, index) => (
          <div key={`metrics-${index}`} className="flex-1">
            <div className="font-bold text-4xl">{item[0]}</div>
            <div className="text-gray-400 text-md mt-2">{item[1]}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
