import React from 'react'

const Header = ({heading}) => {
  return (
    <h1 className=" font-semibold text-center text-customBlack text-[17px]">
        {heading}
    </h1>
  )
}

export default Header