"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import ResumeSideBar from "./components/ResumeSideBar";
import ResumeTopBar from "./components/ResumeTopBar";
import ResumePanel from "./components/ResumePanel";
import PortfolioPanel from "./components/PortfolioPanel";
import { UserDataInterface } from "./interfaces/userDataInterface";

function Home({ userData }: { userData: UserDataInterface }) {
  const searchParams = useSearchParams();
  const [currentPageIndex, setCurrentPageIndex] = useState(
    searchParams.get("t") == "1" ? 1 : 0
  );
  return (
    <Suspense>
      <main className="flex items-center justify-center bg-slate-100 p-8">
        <div className="max-w-screen-lg grid grid-cols-6 gap-8">
          <div className="col-span-6 sm:col-span-3 md:col-span-2">
            <ResumeSideBar userData={userData} />
          </div>
          <div className="col-span-6 sm:col-span-3 md:col-span-4">
            <ResumeTopBar
              userData={userData}
              currentIndex={currentPageIndex}
              onButtonClick={setCurrentPageIndex}
            />
            {currentPageIndex == 0 && <ResumePanel userData={userData} />}
            {currentPageIndex == 1 && <PortfolioPanel userData={userData} />}
          </div>
        </div>
      </main>
    </Suspense>
  );
}

export default function HomeWrapper({ userData }: { userData: UserDataInterface }) {
  return (
    <Suspense>
      <Home userData={userData} />
    </Suspense>
  )
}