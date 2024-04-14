"use client"
import { v4 as uuidv4 } from "uuid"
import Member from "./Member"
import { MemberName } from "./types"

export default function MemberRow() {
  const members: MemberName[] = ["drew", "lane", "jake"]
  return (
    <div className="grid md:grid-cols-3 w-full overflow-hidden h-[640px] bg-black gap-4">
      {members.map((member) => {
        return <Member key={uuidv4()} memberKey={member} />
      })}
    </div>
  )
}
