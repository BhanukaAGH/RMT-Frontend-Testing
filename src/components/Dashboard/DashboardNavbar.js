import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { RiArrowDropDownLine } from 'react-icons/ri'
import UserImg from '../../assets/user.jpeg'

import { InfoBox } from '../OutSideClickFunctionals'

const DashboardNavbar = ({ setOpenSideBar }) => {
  const [openDropDown, setOpenDropDown] = useState(false)

  return (
    <div className='flex w-full items-center justify-between px-8 py-3 border-b-2'>
      <AiOutlineMenu
        className='text-2xl cursor-pointer md:hidden float-left hover:scale-125 duration-300'
        onClick={() => setOpenSideBar((sidebar) => !sidebar)}
      />
      <div className='flex items-center space-x-2 w-full justify-end'>
        <div class='ml-3 relative'>
          <button
            type='button'
            class='flex items-center text-sm space-x-3'
            onClick={() => setOpenDropDown(!openDropDown)}
          >
            <img
              class='h-10 w-10 rounded-full ring-2 ring-[#e2a500] object-cover'
              src={UserImg}
              alt='user-profile'
            />
            <span className='font-medium hidden md:block'>
              it20009472@my.sliit.lk
            </span>
            <RiArrowDropDownLine className='text-xl' />
          </button>
          <InfoBox
            show={openDropDown}
            onClickOutside={() => setOpenDropDown(false)}
          />

          {openDropDown && (
            <>
              <div
                class='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='user-menu-button'
                tabindex='-1'
              >
                <Link
                  to='/'
                  class='block px-4 py-2 text-sm text-gray-700 hover:bg-[#e2a500]'
                  role='menuitem'
                  tabindex='-1'
                >
                  Your Profile
                </Link>
                <Link
                  to='/'
                  class='block px-4 py-2 text-sm text-gray-700 hover:bg-[#e2a500]'
                >
                  Sign out
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default DashboardNavbar
