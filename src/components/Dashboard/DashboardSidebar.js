import React, { useEffect, useState } from 'react'
import {
  MdOutlineGroups,
  MdOutlineCloudUpload,
  MdOutlineSubtitles,
  MdOutlineTopic,
} from 'react-icons/md'
import {
  HiOutlineDocumentDuplicate,
  HiOutlineUserGroup,
  HiOutlineDocumentText,
  HiOutlineTemplate,
} from 'react-icons/hi'
import { VscSymbolKeyword } from 'react-icons/vsc'
import { RiChatSmile2Line } from 'react-icons/ri'
import logo from '../../assets/logo.png'
import { motion, AnimatePresence } from 'framer-motion'

const AdminMenus = [
  { name: 'Users', icon: MdOutlineGroups },
  { name: 'Submitions', icon: HiOutlineDocumentDuplicate },
  { name: 'Student Groups', icon: HiOutlineUserGroup },
  { name: 'Marking Schemes', icon: HiOutlineDocumentText },
  { name: 'Uploads', icon: MdOutlineCloudUpload },
]

const StudentMenus = [
  { name: 'Student Group', icon: MdOutlineGroups },
  { name: 'Topic', icon: VscSymbolKeyword },
  { name: 'Templates', icon: HiOutlineTemplate },
  { name: 'Submition', icon: MdOutlineTopic },
  { name: 'Chats', icon: RiChatSmile2Line },
]

const StaffMenus = [
  { name: 'Topic Requests', icon: MdOutlineSubtitles },
  { name: 'Evaluates', icon: VscSymbolKeyword },
]

const PanelMemberMenus = [
  { name: 'Topics', icon: MdOutlineSubtitles },
  { name: 'Presentations', icon: VscSymbolKeyword },
]

const sideBarVariants = {
  hidden: {
    x: '-1000',
  },
  visible: {
    x: 0,
    transition: {
      stiffness: 1000,
      duration: 0.5,
    },
  },
  exit: {
    x: '-500px',
    transition: { stiffness: 1000, duration: 0.5 },
  },
}

const DashboardSidebar = ({
  userType,
  activeTab,
  setActiveTab,
  openSideBar,
  setOpenSideBar,
}) => {
  const [menus, setMenus] = useState([])

  useEffect(() => {
    if (userType === 'Admin') {
      setMenus(AdminMenus)
    } else if (userType === 'Student') {
      setMenus(StudentMenus)
    } else if (userType === 'supervisor' || userType === 'co_supervisor') {
      setMenus(StaffMenus)
    } else if (userType === 'panel_member') {
      setMenus(PanelMemberMenus)
    }
  }, [userType])

  return (
    <>
      <div className='w-72 bg-[#3a454b] h-screen pt-8 border-r-2 hidden md:block'>
        <div className='flex items-center justify-center'>
          <img src={logo} className='w-40 h-40 object-cover' alt='logo' />
        </div>
        <ul className='pt-6 space-y-4'>
          {menus.map((menu, index) => (
            <li
              key={index}
              className={`flex items-center py-2 pl-10 cursor-pointer hover:text-[#e2a500] text-gray-400 text-base font-medium hover:border-l-4 border-l-[#e2a500] space-x-4 ${
                index === activeTab ? 'text-[#e2a500] border-l-4' : ''
              }`}
              onClick={() => setActiveTab(index)}
            >
              <menu.icon className='text-xl' />
              <p>{menu.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <AnimatePresence>
        {openSideBar && (
          <motion.div
            className='absolute w-64 bg-[#3a454b] h-screen pt-8 border-r-2 z-20'
            variants={sideBarVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <div className='flex items-center justify-center'>
              <img src={logo} className='w-40 h-40 object-cover' alt='logo' />
            </div>
            <ul className='pt-6 space-y-4'>
              {menus.map((menu, index) => (
                <li
                  key={index}
                  className={`flex items-center py-2 pl-10 cursor-pointer hover:text-[#e2a500] text-gray-400 text-base font-medium hover:border-l-4 border-l-[#e2a500] space-x-4 ${
                    index === activeTab ? 'text-[#e2a500] border-l-4' : ''
                  }`}
                  onClick={() => {
                    setActiveTab(index)
                    setOpenSideBar(false)
                  }}
                >
                  <menu.icon className='text-xl' />
                  <p>{menu.name}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default DashboardSidebar
