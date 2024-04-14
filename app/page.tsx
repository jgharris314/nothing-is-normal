import Image from "next/image"
import MemberRow from "./components/MemberRow"

const ParentalIsNoraml = () => {
  return (
    <div className="w-[600px] bg-black flex flex-col items-center justify-center text-[60px] leading-[60px] font-black">
      <div className="bg-black text-white px-4 pt-4">
        <span className="">nothing</span>
      </div>
      <div className="w-full flex items-center justify-center  split-bg">
        <span className="scroll-content">is</span>
      </div>
      <div className="w-full bg-white text-black text-center px-4 pb-4 -mt-0.5">
        <span className="">normal</span>
      </div>
    </div>
  )
}

const CartoonIsNormal = () => {
  return (
    <div className=" bg-black flex flex-col items-center justify-center">
      <div className="flex w-full">
        <span className="black-square">n</span>
        <span className="white-square">o</span>
        <span className="black-square">t</span>
        <span className="white-square">h</span>
        <span className="black-square">i</span>
        <span className="white-square">n</span>
        <span className="black-square">g</span>
      </div>
      <div className="flex w-full">
        <span className="white-square flex flex-col !text-red-600 text-[50px] leading-[50px] h-full">
          <div className="pr-8">i</div>
          <div className="pl-8">s</div>
        </span>
        <span className="black-square">n</span>
        <span className="white-square">o</span>
        <span className="black-square">r</span>
        <span className="white-square">m</span>
        <span className="black-square">a</span>
        <span className="white-square">l</span>
      </div>
    </div>
  )
}

const GapRow = () => <div className="h-[30rem]" />

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col uppercase bg-slate-900 overflow-hidden">
      <div className="flex w-full items-center justify-center my-8">
        <ParentalIsNoraml />
      </div>
      <MemberRow />
    </main>
  )
}
