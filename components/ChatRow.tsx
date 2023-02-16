'use client'

import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline"
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useCollection } from "react-firebase-hooks/firestore"
import { db } from "../firebase"

type ChatRowProps = {
    id: string
}

function ChatRow({id}: ChatRowProps) {

  const pathname = usePathname()
  const router = useRouter()
  const [active, setActive] = useState(false)
  const {data: session} = useSession()

  const [messages] = useCollection(
    collection(db, "users", session?.user?.email!, "chats", id, "messages")
  )

  useEffect(() => {
      if(!pathname) return
      setActive(pathname.includes(id))
  }, [pathname])

  const removeChat = async () => {
    await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id))
    router.replace('/')
  }
    
  return (
    <Link href={`/chat/${id}`} className={pathname?.split('/')[2] == id ? 'activeRow chat' : 'chat'} >
        <ChatBubbleLeftIcon className="w-6 h-6 text-gray-600 hover:text-black" />
        <p className="flex-1 hidden md:inline-flex truncate">
          {messages?.docs[messages?.docs.length - 1]?.data().text || 'новый чатик'}
        </p>
        <TrashIcon onClick={removeChat} className="w-6 h-6 text-gray-600 hover:text-red-600" />
    </Link>
  )
}

export default ChatRow