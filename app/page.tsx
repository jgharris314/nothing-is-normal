import Nav from "./components/Nav"
import HomeSection from "./components/sections/Home"
import MembersSection from "./components/sections/Members"

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center bg-black overflow-hidden pb-32">
      <Nav />
      <HomeSection />
      <MembersSection />
    </main>
  )
}
