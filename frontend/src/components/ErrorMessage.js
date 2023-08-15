import React from 'react'

export default function ErrorMessage({children}) {
  return (
    <div style={{background: "red", color: "white"}}>
        {children}
    </div>
  )
}
