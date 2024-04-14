import { ParentalIsNoraml } from "./components/ParentalAdvisoryLogo"
import MemberRow from "./components/MemberRow"

const GapRow = () => <div className="h-[30rem]" />

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col uppercase bg-slate-900 overflow-hidden px-10 pb-32">
      <div className="flex w-full items-center justify-center my-8">
        <ParentalIsNoraml />
      </div>
      <MemberRow />
    </main>
  )
}
