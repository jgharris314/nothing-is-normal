"use client"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { RxHamburgerMenu } from "react-icons/rx"
import { MdClose } from "react-icons/md"
import SectionContainer from "../SectionContainer"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { navOptions } from "./constants"

export default function MobileNav() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  function onClickHandler(option: string) {
    const hash = `#${option}`
    router.push(hash)
    setIsOpen(false)
  }

  const greenHex = "#1cb048"
  const blueHex = "#00b4e0"

  return (
    <>
      <SectionContainer
        bgClasses="xl:hidden bg-black bg-gradient-to-t from-black/50 to-black/10 fixed h-[5.5rem] w-screen left-0 top-0 z-50"
        additionalContentClasses="flex w-full h-[5.5rem] items-center"
      >
        <div className="w-1/3">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="h-12 flex items-center"
          >
            {isOpen ? (
              <MdClose size={35} color={"#d1d5dc"} />
            ) : (
              <RxHamburgerMenu size={35} color={"#d1d5dc"} />
            )}
          </button>
        </div>
        <div className="relative flex w-1/3 justify-center bg-contain">
          <Image
            alt="Nothing is Normal logo"
            className="bg-black bg-gradient-to-t from-black/90 to-black/50 h-[5rem] w-auto"
            src={"/logo.png"}
            width={140}
            height={0}
          />
        </div>
        <div className="w-1/3" />
      </SectionContainer>

      {isOpen && (
        <div className="h-screen fixed top-[5.5rem] left-0 w-screen bg-black lg:hidden transition-transform z-50">
          {
            <ul className="flex flex-col w-full items-start justify-start gap-4 text-white p-6 md:px-12">
              {navOptions.map((option) => {
                return (
                  <button
                    key={uuidv4()}
                    type="button"
                    onClick={() => onClickHandler(option)}
                    className={
                      "capitalize w-full h-16 text-[20px] font-semibold border-white border-b-2"
                    }
                  >
                    {option}
                  </button>
                )
              })}
            </ul>
          }
        </div>
      )}
    </>
  )
}
