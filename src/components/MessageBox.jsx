import React from 'react'

const MessageBox = ({name, textColor}) => {
  return (
    <div>
      <h1
        style={{
            color : textColor
        }}
      >Hello{name}</h1>
    </div>
  )
}

export default MessageBox
