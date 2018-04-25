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
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  }
}

export default CenteredView