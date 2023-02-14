'use client'

import { usePathname } from "next/navigation"

function ChatPage() {
  const pathname = usePathname()

  return (
    <div>ChatPage with id: {pathname?.split('/')[2]}</div>
  )
}

export default ChatPage