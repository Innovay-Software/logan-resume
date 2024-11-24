'use client'

import { useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'
import ResumeSideBar from './components/ResumeSideBar'
import ResumeTopBar from './components/ResumeTopBar'
import ResumePanel from './components/ResumePanel'
import PortfolioPanel from './components/PortfolioPanel'
import { UserDataInterface } from './interfaces/userDataInterface'
import FooterMenuMobile from './components/FooterMenuMobile'
import ResumeSideBarMobile from './components/ResumeSideBarMobile'

function Home({ userData }: { userData: UserDataInterface }) {
  const searchParams = useSearchParams()
  const [currentPageIndex, setCurrentPageIndex] = useState(
    searchParams.get('t') == '1' ? 1 : 0
  )
  return (
    <main className="flex items-center justify-center bg-slate-100 p-0 md:p-8">
      <div className="max-w-screen-lg grid grid-cols-6 md:gap-8">
        <FooterMenuMobile userData={userData} />
        <div className="col-span-6 md:col-span-2">
          <ResumeSideBar userData={userData} />
          <ResumeSideBarMobile userData={userData} />
        </div>
        <div className="col-span-6 md:col-span-4">
          <ResumeTopBar
            userData={userData}
            currentIndex={currentPageIndex}
            onButtonClick={setCurrentPageIndex}
          />
          <div className={`md:${currentPageIndex == 0 ? 'block' : 'hidden'}`}>
            <ResumePanel userData={userData} />
          </div>
          <div
            className={`mt-10 md:mt-0 md:${
              currentPageIndex == 1 ? 'block' : 'hidden'
            }`}
          >
            <PortfolioPanel userData={userData} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default function HomeWrapper({
  userData,
}: {
  userData: UserDataInterface
}) {
  return (
    <Suspense>
      <Home userData={userData} />
    </Suspense>
  )
}
