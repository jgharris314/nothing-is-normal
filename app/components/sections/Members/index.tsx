import MemberRow from "./MemberRow"
import SectionContainer from "../../SectionContainer"

export default function MembersSection() {
  return (
    <SectionContainer
      id="members"
      bgClasses=""
      additionalContentClasses="flex flex-col h-full w-full justify-center items-center uppercase pt-32"
    >
      <h2 className="section-header">Members</h2>
      <MemberRow />
    </SectionContainer>
  )
}
