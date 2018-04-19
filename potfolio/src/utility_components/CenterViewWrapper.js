import React from 'react'

const CenteredView = ({ children }) => {
  const { centerChildren } = styles
  return (
    <div style={centerChildren}>
      {children}
    </div>
  )
}

const styles = {
  centerChildren: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  }
}

export default CenteredView