'use client'

import { useSession } from "next-auth/react"
import NewChat from "./NewChat"

function SideBar() {

  const {data: session } = useSession()

  return (
    <div className="bg-[#202123] h-screen max-w-xs md:min-w-[20rem]">
        <NewChat />
        <div></div>
        {session && (
          <img src={session.user?.image!} alt='' />
        )}
    </div>
  )
}

export default SideBar