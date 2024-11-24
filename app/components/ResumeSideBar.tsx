import React from 'react'
import Styles from './ResumeSideBar.module.css'
import { UserDataInterface } from '../interfaces/userDataInterface'
import Image from 'next/image'

export default function ResumeSideBar({
  userData,
}: {
  userData: UserDataInterface
}) {
  const [showSensitiveInfo, setShowSensitiveInfo] = React.useState(false)

  return (
    <div className="bg-white rounded-lg hidden md:block">
      <div className="p-6 pb-0 mb-4">
        <div className="text-xl font-bold text-gray-800 mb-1">LOGAN DAI</div>
        <div className=" text-sm text-gray-500">Software Engineer</div>
      </div>
      <figure className={Styles.sidebarImage + ' mt-[-18px] relative'}>
        <Image
          src="/selfie3_cartoon.jpg"
          alt="avatar"
          width="300"
          height="300"
          className="w-full aspect-auto"
        />
        {/* <div className='absolute bottom-0 rounded-full w-12 h-12 bg-sky-600'>
        </div> */}
      </figure>
      <div className="flex items-center justify-center">
        <div className="relative pb-6">
          <div className="border-l-[2px] h-10 border-l-gray-200" />
          {userData.resumeData.resumeSideBar.metadata.map((item, index) => {
            if (!showSensitiveInfo && item.sensitive) {
              return
            }
            const content = item.url ? (
              <a href={item.url} target="_blank" className="text-sm ml-4 ">
                {item.key}:
                <span className=" ml-2 text-blue-500 underline">
                  {item.value}
                </span>
              </a>
            ) : (
              <div className="text-sm ml-4">
                {item.key}:<span className=" ml-2 ">{item.value}</span>
              </div>
            )

            return (
              <div
                key={index}
                className="relative flex items-center pb-6 border-l-[2px] border-l-gray-200 text-gray-500"
              >
                {content}
                {index <
                userData.resumeData.resumeSideBar.metadata.length - 1 ? (
                  ''
                ) : (
                  <div className="absolute -left-2 w-2 top-[4px] bottom-0 bg-white"></div>
                )}
                <div className="absolute left-[-6px] top-[4px] w-[10px] h-[10px] border-sky-600 bg-white border-2 rounded-full" />
              </div>
            )
          })}
          {!showSensitiveInfo && (
            <div className="relative">
              <div className="absolute -left-1 w-2 -top-[30px] bottom-0 bg-white"></div>
              <button
                className="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={(event) => setShowSensitiveInfo(true)}
              >
                Show Contact Info
              </button>
            </div>
          )}
          <div className="absolute left-[-19px] top-[-20px] w-[40px] h-[40px] flex justify-center items-center bg-sky-600 rounded-full">
            <Image
          width="300"
          height="300"
              src="/glasses-icon.png"
              alt="avatar"
              className="w-8 aspect-auto m-auto"
            />
          </div>
          {/* <div className='flex justify-center items-center mt-10'>
            <button className='bg-sky-600 hover:bg-sky-800 text-white rounded-full px-4 py-2 '>Download CV <FaDownload className='ml-2 inline-flex' /></button>
          </div> */}
        </div>
      </div>
    </div>
  )
}
