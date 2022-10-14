import React from 'react'

const TextItem = (props) => {
  return (
    <li className='p-2 mx-auto font-bold bg-gray-200 text-gray-700 md:w-1/4'>
      {props.num}
    </li>
  )
}

export default TextItem
