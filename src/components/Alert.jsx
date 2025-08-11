import React from 'react'

const Alert = ({children}) => {
  return (
    <div className='bg-red-400 text-sm p-2 mb-3 rounded-md flex gap-2 items-center shadow-md'>
        {children}
    </div>
  )
}

export default Alert
