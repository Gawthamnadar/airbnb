"use client"

import Image from "next/image"
import React from "react"

interface AvatarProps {
  src: string | null | undefined
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      src={src || "/images/placeholder.jpg"}
      alt="avatar"
      height={30}
      width={30}
    />
  )
}

export default Avatar
