import { useState } from "react"
import { MemberName } from "./types"
import React from "react"

const memberInfo: Record<MemberName, any> = {
  drew: {
    imgSrc: "/drewNisN.jpg",
    details: {
      role: "Drums, SFX, Lights",
      hobbies: "drumming",
      bio: "drumming",
    },
  },
  lane: {
    imgSrc: "/laneNisN.jpg",
    details: {
      role: "Vocals, Keys",
      hobbies: "bustin kenflips on fools",
      bio: "yarp",
    },
  },
  jake: {
    imgSrc: "/jakeNisN.jpg",
    details: {
      role: "Bass",
      hobbies: "disassociating",
      bio: "barp",
    },
  },
  none: {},
}

export default function Member({
  memberKey,
}: {
  memberKey: keyof typeof memberInfo
}) {
  const info = memberInfo[memberKey]

  const [displayDetails, setDisplayDetails] = useState<boolean>(false)

  const handlClick = () => {
    const updatedValue = displayDetails ? false : true
    setDisplayDetails(updatedValue)
  }

  return (
    <div
      role="button"
      onClick={() => handlClick()}
      //@ts-ignore
      style={{ "--image-url": `url(${info.imgSrc})` }}
      className={`relative bg-[image:var(--image-url)] bg-cover bg-no-repeat ${
        memberKey === "jake" && "md:bg-[left_calc(60%)_top_calc(0%)]"
      }
      ${memberKey === "lane" && "md:bg-[left_calc(15%)_top_calc(0%)]"}
    
      ${
        displayDetails &&
        "before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-black/85 before:to-black/85"
      }`}
    >
      {" "}
      {displayDetails && (
        <div className="z-50 flex flex-col w-full h-full items-center justify-center  text-white/100 text-[24px] absolute">
          <span className="capitalize">{memberKey}</span>
          <span className="capitalize">{info.details.role}</span>
        </div>
      )}
    </div>
  )
}
