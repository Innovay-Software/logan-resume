'use client'
import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery'
import { IoIosClose } from 'react-icons/io'
import 'react-image-gallery/styles/css/image-gallery.css'
import 'react-slideshow-image/dist/styles.css'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { UserDataInterface } from '../interfaces/userDataInterface'
import Image from 'next/image'

export default function ResumePanel({
  userData,
}: {
  userData: UserDataInterface
}) {
  const portfolioData = userData.portfolioData
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [galleryPortfolio, setGalleryPortfolio] = useState(portfolioData[0])
  const [galleryStartingIndex, setGalleryStartingIndex] = useState(0)

  const onDesktopThumbnailTap = (
    portfolioIndex: number,
    photoIndex: number
  ) => {
    setIsGalleryOpen(true)
    setGalleryPortfolio(portfolioData[portfolioIndex])
    setGalleryStartingIndex(photoIndex)
  }

  const onMobileThumbnailTap = (portfolioIndex: number, photoIndex: number) => {
    setIsGalleryOpen(true)
    setGalleryPortfolio(portfolioData[portfolioIndex])
    setGalleryStartingIndex(photoIndex)
  }

  return (
    <div
      id="portfolio"
      className="relative bg-white p-6 py-10 md:mt-8 md:rounded-lg "
    >
      <div className="relative inline-block">
        <span className="absolute -left-1 -right-1 bottom-1 h-1.5 bg-sky-200" />
        <h2
          id="portfolio"
          className="relative text-base font-bold text-gray-800"
        >
          Portfolio
        </h2>
      </div>

      {portfolioData.map((portfolio, index) => (
        <div key={index} className="slide-container mb-16 mt-10">
          <h3 className="text-lg font-bold text-gray-800 text-center">
            {portfolio.title}
          </h3>
          <div className="mt-4 mb-4 text-gray-400">{portfolio.subtitle}</div>
          <div className="hidden md:flex flex-wrap gap-5 ">
            {/* Desktop */}
            {portfolio.photos.map((photo, index2) => (
              <div
                key={index2}
                className={`"cursor-pointer rounded-lg overflow-hidden flex justify-center items-start border-blue-200 border-2
                  ${portfolio.photoVertical ? ' w-24 h-32 ' : ' w-32 h-24 '}
                  `}
                onClick={() => {
                  onDesktopThumbnailTap(index, index2)
                }}
              >
                <Image
                  className="w-full aspect-auto cursor-pointer"
                  src={photo.thumbnail}
                  alt={''}
                  width={100}
                  height={0}
                  // style={{ width: '100%', height: 'auto' }}
                />
              </div>
            ))}
          </div>
          <div className="flex md:hidden flex-wrap gap-5 ">
            {/* Mobile */}
            {portfolio.photos.map((photo, index2) => (
              <div
                key={index2}
                className={`cursor-pointer rounded-lg overflow-hidden flex justify-center items-start border-blue-200 border-2
                  ${portfolio.photoVertical ? ' w-24 h-32 ' : ' w-32 h-24 '}
                  `}
                onClick={() => {
                  onMobileThumbnailTap(index, index2)
                }}
              >
                <Image
                  className="w-full aspect-auto cursor-pointer"
                  src={photo.thumbnail}
                  alt={''}
                  width={100}
                  height={0}
                  // style={{ width: '100%', height: 'auto' }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      <Dialog
        open={isGalleryOpen}
        onClose={setIsGalleryOpen}
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
                <ImageGallery
                  startIndex={galleryStartingIndex}
                  showIndex={true}
                  items={galleryPortfolio.photos}
                  // thumbnailPosition={'bottom'}
                  lazyLoad={true}
                  showNav={true}
                  showThumbnails={false}
                  useTranslate3D={true}
                />
              </div>
              <div className="mx-auto hidden md:block">
                <ImageGallery
                  startIndex={galleryStartingIndex}
                  showIndex={true}
                  items={galleryPortfolio.photos}
                  // thumbnailPosition={'bottom'}
                  lazyLoad={true}
                  showNav={true}
                  showThumbnails={false}
                  useTranslate3D={true}
                />
              </div>
              <div className="fixed bottom-0 left-0 right-0 flex justify-center">
                <div
                  className="mb-5 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer"
                  onClick={() => {
                    setIsGalleryOpen(false)
                  }}
                >
                  <IoIosClose size={40} color={'#FFF'} />
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
