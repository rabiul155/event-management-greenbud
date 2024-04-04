import React from 'react'
import { FaPhone } from 'react-icons/fa6'
import { MdMail } from 'react-icons/md'
import { CgFacebook } from 'react-icons/cg'
import { BsInstagram } from 'react-icons/bs'
import Image from 'next/image'
import logo from '../../public/logo.png'
import ActionButton from './ActionButton'

function Navbar() {
  return (
    <>
      <div className="h-8 bg-primary text-white font-semibold flex items-center">
        <div className="max-w-screen-2xl text-xs px-4 sm:px-24">
          <div className="flex flex-col sm:flex-row items-center gap-y-0 gap-x-4">
            <div className="flex items-center gap-2">
              <span>
                <FaPhone />
              </span>
              <span>(+880) 19770-GREEN</span>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <MdMail className="block h-[14px] w-4" />
              </span>
              <span>info@greenbudbd.com</span>
            </div>
            <div className="hidden sm:block">
              <CgFacebook className="block h-6 w-[18px]" />
            </div>
            <div className="hidden sm:block">
              <BsInstagram className="block h-[14px] w-4" />
            </div>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-50 bg-white h-16 sm:h-20 border border-b shadow flex items-center">
        <div className="max-w-screen-2xl w-full px-4 sm:px-24">
          <div className="flex justify-between items-center">
            <div>
              <Image src={logo} className="w-36 sm:w-56" alt="logo" />
            </div>
            <div>
              <ActionButton className="font-semibold rounded-full px-4 py-2 sm:px-8 sm:py-3">Register Now</ActionButton>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
