'use client'

import { collection, orderBy, query } from "firebase/firestore"
import { signOut, useSession } from "next-auth/react"
import {useCollection} from 'react-firebase-hooks/firestore'
import { db } from "../firebase"
import ChatRow from "./ChatRow"
import NewChat from "./NewChat"

function SideBar() {

  const {data: session } = useSession()

  const [chats, loading, error] = useCollection(
    session && query(
      collection(db, 'users', session.user?.email!, 'chats'),
      orderBy("createdAt", "asc")
    )
  )
  
  return (
    <div className="bg-[#202123] p-2 h-screen max-w-xs md:min-w-[20rem] flex flex-col">
      <div className="flex-1">
        <NewChat />
        <div>
          {error && <strong>Error: {JSON.stringify(error)}</strong>}
          {loading && <span>Collection: Loading...</span>}
          {chats?.docs.map(chat => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        <div className="flex items-center gap-3 text-yellow-100">
          <img src={session.user?.image!} alt='' onClick={() => signOut()} 
            className='w-16 h-16'
          />
          {session?.user?.name}
        </div>
      )}
    </div>
  )
}

export default SideBar