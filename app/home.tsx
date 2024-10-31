"use client";
import "./globals.css";

import ResumeSideBar from "./components/ResumeSideBar";
import ResumeTopBar from "./components/ResumeTopBar";
import ResumePanel from "./components/ResumePanel";
import PortfolioPanel from "./components/PortfolioPanel";
import { useState } from "react";
import { UserDataInterface } from "./interfaces/userDataInterface";

export default function Home({ userData }: { userData: UserDataInterface }) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  return (
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
  );
}
