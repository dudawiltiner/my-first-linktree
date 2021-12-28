import React from 'react'

export default function Footer() {
  return (
    <div className="space-x-2 flex">
      <img src="./einstein.svg" alt="Figura do ALbert Einstein"/>
      <div className="flex">
        <a target="_blank" href=""><img src="./github.svg" alt="GitHub"/></a>
        <a target="_blank" href=""><img src="./linkedin.svg" alt="LinkedIn"/></a>
        <a target="_blank" href=""><img src="./youtube.svg" alt="YouTube"/></a>
        <a target="_blank" href=""><img src="./insta.svg" alt="Insta"/></a>
      </div>
    </div>
  )
}
