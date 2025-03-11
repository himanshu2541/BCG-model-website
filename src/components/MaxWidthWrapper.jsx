import React from 'react'

const MaxWidthWrapper = ({children, width="1200px", className=""}) => {
  return (
    <div className={`mx-auto ${className}`} style={{maxWidth: width}}>{children}</div>
  )
}

export default MaxWidthWrapper