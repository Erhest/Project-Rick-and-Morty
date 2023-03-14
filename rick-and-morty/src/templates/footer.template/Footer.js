import React from 'react'

const Footer = () => {
  const now = new Date()
  return (
    <footer>Kenji Hashimoto {now.getFullYear()}</footer>
  )
}

export default Footer