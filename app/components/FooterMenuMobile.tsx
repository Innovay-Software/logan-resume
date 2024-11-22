'use client'

import React, { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import ResumeSVG from './svgs/resume'
import PortfolioSVG from './svgs/portfolio'
import ContactSVG from './svgs/contact'
import { UserDataInterface } from '../interfaces/userDataInterface'

export default function FooterMenuMobile({
  userData,
}: {
  userData: UserDataInterface
}) {
  const iconSize = 30

  const [showContactInfo, setShowContactInfo] = useState(false)

  function onMenuTap(target: string) {
    if (target == 'contact-us') {
      setShowContactInfo(true)
      return
    }
    const element = document.querySelector(`#${target}`)
    if (element) {
      // Smooth scroll to that elment
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      })
    }
  }

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-10 text-center md:hidden`}>
      {/* <button
        className="text-gray-500 w-10 h-10 relative bg-white border-[1px] rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">Open main menu</span>
        <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" ${
              isOpen ? ' rotate-45 ' : ' -translate-y-1.5 '
            }`}
          ></span>

          <span
            aria-hidden="true"
            className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out" ${
              isOpen ? ' opacity-0 ' : ''
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out" ${
              isOpen ? ' -rotate-45 ' : ' translate-y-1.5 '
            }`}
          ></span>
        </div>
      </button> */}
      <div className="flex w-full h-24 bg-white text-sm text-center text-gray-400">
        <div
          className="flex-1 flex flex-col justify-center items-center"
          onClick={() => {
            onMenuTap('resume')
          }}
        >
          <ResumeSVG width={iconSize} height={iconSize} />
          <div className="mt-2">Resume</div>
        </div>
        <div
          className="flex-1 flex flex-col justify-center items-center"
          onClick={() => {
            onMenuTap('portfolio')
          }}
        >
          <PortfolioSVG width={iconSize} height={iconSize} />
          <div className="mt-2">Portfolio</div>
        </div>
        <div
          className="flex-1 flex flex-col justify-center items-center"
          onClick={() => {
            onMenuTap('contact-us')
          }}
        >
          <ContactSVG width={iconSize} height={iconSize} />
          <div className="mt-2">Contact</div>
        </div>
      </div>
      <Dialog
        open={showContactInfo}
        onClose={setShowContactInfo}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="flex-1 relative p-10 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="mx-auto md:hidden">
                <div className="flex flex-col items-start justify-evenly">
                  {userData.resumeData.resumeSideBar.metadata.map(
                    (item, index) => {
                      if (item.url == undefined) {
                        return
                      }
                      return (
                        <div
                          key={index}
                          className="relative flex items-center py-3 border-l-[2px] border-l-gray-200 text-gray-500"
                        >
                          {item.url ? (
                            <a
                              href={item.url}
                              target="_blank"
                              className="text-md ml-4 "
                            >
                              {item.key}:
                              <span className=" ml-2 text-blue-500 underline">
                                {item.value}
                              </span>
                            </a>
                          ) : (
                            <div className="text-md ml-4">
                              {item.key}:
                              <span className=" ml-2 ">{item.value}</span>
                            </div>
                          )}
                        </div>
                      )
                    }
                  )}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
