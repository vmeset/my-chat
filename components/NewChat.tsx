'use client'

import { PlusIcon } from "@heroicons/react/24/outline"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { db } from "../firebase"

function NewChat() {

  const {data: session} = useSession()
  const router = useRouter()

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"), {
        messages: [],
        userId: session?.user?.email!,
        createdAt: serverTimestamp()
      }
    )
    router.push(`/chat/${doc.id}`)
  }

  return (
    <div onClick={createNewChat}
    className="flex items-center m-2 space-x-1 customParagraph cursor-pointer hover:bg-gray-700/70 transition-all duration-300 ease-in-out text-white hover:text-yellow-100 overflow-y-auto">
        <PlusIcon className="w-4 h-4" />
        <p>
            Новый чат
        </p>
    </div>
  )
}

export default NewChat