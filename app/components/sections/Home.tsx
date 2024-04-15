import { ParentalIsNoraml } from "../ParentalAdvisoryLogo"
import SectionContainer from "../SectionContainer"

export default function HomeSection() {
  return (
    <SectionContainer
      id="home"
      bgClasses="h-screen  bg-[linear-gradient(to_bottom,#ffffff65,#11111165_60%,#000_90%),url('/blackAndWhiteGrid.jpg')] bg-cover"
      additionalContentClasses="flex h-full w-full justify-center items-center uppercase pt-16"
    >
      <h1 className="flex flex-col w-full text-[60px] leading-[60px] md:text-[150px] md:leading-[150px] xl:text-[200px] xl:leading-[200px] text-center font-[1000]">
        <span>
          <span className="text-red-600">N</span>othing{" "}
        </span>
        <span>
          <span className="white-to-red">is</span>
        </span>
        <span>
          N<span className="text-red-600">ormal</span>
        </span>
      </h1>
    </SectionContainer>
  )
}
