import React from 'react'

function NavBar() {
  return (
    <div className='fixed  top-0 size-full h-[5.5rem] p-5 flex justify-between bg-black'>
        <img className="fixed left-5 w-[7rem]" src="https://logohistory.net/wp-content/uploads/2023/05/Netflix-Logo.png" alt="Netflix Logo" />
        <img className="fixed right-5 w-11" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
    </div>
  )
}
 
export default NavBar
