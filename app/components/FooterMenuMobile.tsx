'use client'

import React from 'react'
import ResumeSVG from './svgs/resume'
import PortfolioSVG from './svgs/portfolio'
import ContactSVG from './svgs/contact'
import { UserDataInterface } from '../interfaces/userDataInterface'
import ContactInfoModal from './ContactInfoModal'

export default function FooterMenuMobile({
  userData,
}: {
  userData: UserDataInterface
}) {
  const iconSize = 30

  function onMenuTap(target: string) {
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

        <div className="flex-1 flex flex-col justify-center items-center">
          <ContactInfoModal userData={userData}>
            <div className="flex flex-col justify-center items-center">
              <ContactSVG width={iconSize} height={iconSize} />
              <div className="mt-2">Contact</div>
            </div>
          </ContactInfoModal>
        </div>
      </div>
    </div>
  )
}
