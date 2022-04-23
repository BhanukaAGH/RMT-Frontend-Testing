import React from 'react'
import DashboardNavbar from './DashboardNavbar'
// Admin Component
import UsersContent from '../Admin/UsersContent'
import AdminSubmission from '../Admin/AdminSubmission'
import StudentGroups from '../Admin/StudentGroups'
import MarkingScheme from '../Admin/MarkingScheme'
import UploadsContent from '../Admin/UploadsContent'

// Student Component
import StudentGroup from '../Student/StudentGroup'
import StudentTopic from '../Student/StudentTopic'
import StudentTemplates from '../Student/StudentTemplates'
import StudentSubmission from '../Student/StudentSubmission'
import StudentChats from '../Student/StudentChats'

// Staff Component
import TopicRequest from '../Staff/TopicRequest'
import Evaluates from '../Staff/Evaluates'

const DashboardContent = ({
  userType,
  activeTab,
  openSideBar,
  setOpenSideBar,
}) => {
  return (
    <div className='h-screen w-full relative flex flex-col overflow-hidden'>
      {openSideBar && (
        <div
          className='h-screen w-full z-10 bg-black opacity-40 absolute md:hidden'
          onClick={() => setOpenSideBar(false)}
        ></div>
      )}
      <DashboardNavbar setOpenSideBar={setOpenSideBar} />
      <div className='text-2xl font-semibold bg-indigo-50 w-full h-full overflow-hidden'>
        {/* Admin Content */}
        {userType === 'Admin' && activeTab === 0 && <UsersContent />}
        {userType === 'Admin' && activeTab === 1 && <AdminSubmission />}
        {userType === 'Admin' && activeTab === 2 && <StudentGroups />}
        {userType === 'Admin' && activeTab === 3 && <MarkingScheme />}
        {userType === 'Admin' && activeTab === 4 && <UploadsContent />}

        {/* Student Content */}
        {userType === 'Student' && activeTab === 0 && <StudentGroup />}
        {userType === 'Student' && activeTab === 1 && <StudentTopic />}
        {userType === 'Student' && activeTab === 2 && <StudentTemplates />}
        {userType === 'Student' && activeTab === 3 && <StudentSubmission />}
        {userType === 'Student' && activeTab === 4 && <StudentChats />}

        {/* Staff Content */}
        {userType === 'Staff' && activeTab === 0 && <TopicRequest />}
        {userType === 'Staff' && activeTab === 1 && <Evaluates />}
      </div>
    </div>
  )
}

export default DashboardContent
