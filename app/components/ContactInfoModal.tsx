'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { MdSupportAgent } from 'react-icons/md'
import Image from 'next/image'
import { UserDataInterface } from '../interfaces/userDataInterface'

export default function ContactInfoModal({
  userData,
  children,
}: {
  userData: UserDataInterface
  children: JSX.Element[] | JSX.Element
}) {
  const [open, setOpen] = useState(false)
  const conatctList: string[][] = [
    [
      'Email',
      `${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`,
      `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`,
    ],
    [
      'Mobile',
      `${process.env.NEXT_PUBLIC_CONTACT_MOBILE}`,
      `tel:${process.env.NEXT_PUBLIC_CONTACT_MOBILE}`,
    ],
    [
      'Skype',
      `${process.env.NEXT_PUBLIC_CONTACT_SKYPE}`,
      `skype:${process.env.NEXT_PUBLIC_CONTACT_SKYPE}`,
    ],
    [
      'Leetcode',
      `${process.env.NEXT_PUBLIC_CONTACT_LEETCODE}`,
      `${process.env.NEXT_PUBLIC_CONTACT_LEETCODE}`,
    ],
    [
      'LinkedIn',
      `${process.env.NEXT_PUBLIC_CONTACT_LINKEDIN}`,
      `${process.env.NEXT_PUBLIC_CONTACT_LINKEDIN}`,
    ],
    [
      'GitHub',
      `${process.env.NEXT_PUBLIC_CONTACT_GITHUB}`,
      `${process.env.NEXT_PUBLIC_CONTACT_GITHUB}`,
    ],
  ]

  const onOpenTap = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('onOpenTap')
    e.preventDefault()
    setOpen(true)
  }

  return (
    <>
      <button className="relative" onClick={onOpenTap}>
        {children}
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
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
              <div className="flex flex-col items-start justify-evenly">
                {conatctList.map((item, index) => {
                  const content = item[2] ? (
                    <a href={item[2]} target="_blank" className="text-sm ml-4 ">
                      {item[0]}:
                      <span className=" ml-2 text-blue-500 underline">
                        {item[1]}
                      </span>
                    </a>
                  ) : (
                    <div className="text-sm ml-4">
                      {item[0]}:<span className=" ml-2 ">{item[1]}</span>
                    </div>
                  )

                  return (
                    <div
                      key={index}
                      className="relative flex items-center pb-6  text-gray-500"
                    >
                      {content}
                      <div className="absolute left-[-6px] top-[4px] w-[10px] h-[10px] border-sky-600 bg-white border-2 rounded-full" />
                    </div>
                  )
                })}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
