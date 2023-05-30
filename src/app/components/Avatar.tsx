"use client"

import Image from "next/image"
import React from "react"

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      src={"/images/placeholder.jpg"}
      alt="avatar"
      height={30}
      width={30}
    />
  )
}

export default Avatar
